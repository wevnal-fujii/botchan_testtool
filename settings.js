/*
 * NOTE: bot毎に変わる設定等 
 */

const config = require('./config');

module.exports = {
    bot: 'sulaline',
    device: config.DEVICES.PC,
    cpid: '5da5757ea24a619db7024ffb',
    mail: 'botchan_test+198_0049@wevnal.co.jp',
    product_code: '1',
    overrideParams: {
        mail: 'botchan_test+198_0050@wevnal.co.jp',
        product_code: '1',
    },
    flow: ['Landing', 'FillInfo', 'Order'],
};

/*NOTE: future-gate
module.exports = {
    bot: 'futuregate',
    device: config.DEVICES.PC,
    cpid: '5dc53641a24a61078e73d5ef',
    mail: 'botchan_test+235_0009@wevnal.co.jp',
    product_code: '494',
};
*/
