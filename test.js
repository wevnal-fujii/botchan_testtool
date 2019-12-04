const axios = require('axios');
const crypto = require('crypto');
const { USER_AGENT, CURRENT_URL: CURRENT_URL_BASE, USER_ID: user_id, URL } = require('./config');
const settings = require('./settings');
const { bot, device, cpid, mail, product_code, overrideParams, flow } = settings;
const current_url = CURRENT_URL_BASE.replace(/{{cpid}}/, cpid);
const parameters = require(`./bots/${bot}`);

const waitForSec = sec => new Promise(res => setTimeout(res, sec * 1000));

const mixinParams = baseParams => {
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
        const data = await axios.post(url, params).then(res => res.data).catch(err => console.log(err.response.data), false);

        if(data === false) return console.log('test failure');

        console.log(data);
        if(flow.indexOf(flowName) === flow.length -1) return console.log('test succeeded');

        await waitForSec(interval);
    }
})();

