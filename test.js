const axios = require('axios');
const crypto = require('crypto');
const { USER_AGENT, CURRENT_URL: CURRENT_URL_BASE, USER_ID: user_id, URL } = require('./config');
const settings = require('./settings');
const { bot, device, cpid, mail, incrementMail, product_code, overrideParams, flow } = settings;
const current_url = CURRENT_URL_BASE.replace(/{{cpid}}/, cpid);
const parameters = require(`./bots/${bot}`);
const fs = require('fs');
const moment = require('moment');

const waitForSec = sec => new Promise(res => setTimeout(res, sec * 1000));

if(incrementMail) {
    let settings = fs.readFileSync('./settings.js').toString();
    settings = settings.replace(/(mail: .*)(\d{4})(@.*)/, (_, p1, p2, p3) => {
        let number = Number(p2);
        number++;
        return p1 + ('0000' + number).slice(-4) + p3;
    });
    fs.writeFileSync('./settings.js', settings);
}

const mixinParams = baseParams => {
    if(!cpid || !device || !USER_AGENT[device]) {
        const str = JSON.stringify({ 
            cpid: cpid ? cpid : 'Not setted',
            device: device ? device : 'Not setted', 
            user_agent: USER_AGENT[device] ? USER_AGENT[device] : 'Not setted',
        });
        throw new Error(`settings.jsが正常に設定されていません。${str}`);
    }
    const overrideBaseParams = {
        cpid: cpid,
        user_device: device,
        user_agent: USER_AGENT[device],
        user_id: user_id,
        current_url,
        landing_url: current_url,
    };
    Object.assign(overrideBaseParams, overrideParams);
    Object.keys(overrideBaseParams).filter(key => baseParams.hasOwnProperty(key))
        .forEach(key => baseParams[key] = overrideBaseParams[key]);
    return baseParams;
};

(async () => {
    for(const flowName of flow) {
        const { api, params: baseParams, interval } = parameters[flowName];
        const params = mixinParams(baseParams);
        const url = URL.replace(/{{bot}}/, bot).replace(/{{api}}/, api);
        console.log('post to => ', url);
        console.log('post params => ', params);
        const data = await axios.post(url, params).then(res => res.data).catch(err => (console.log(err.response.data), false));

        if(data === false) return console.log('test failure');

        console.log(data);
        if(data.order_id) {
            const results = require('./results.json');
            const newOrder = {
                order_id: data.order_id, 
                ordered_at: moment().format('YYYY/MM/DD HH:mm:ss')
            };
            results.push(newOrder);
            fs.writeFileSync('./results.json', JSON.stringify(results, null, '  '));
            console.log('test succeeded');
            console.log(newOrder)
            return;
        }

        if(flow.indexOf(flowName) === flow.length -1) return console.log('test finished');

        await waitForSec(interval);
    }
})();

