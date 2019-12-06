/*
 * NOTE: bot毎に変わる設定等 
 */

const config = require('./config');

module.exports = {
    //bot: 'sulaline',
    bot: 'futuregate',
    device: config.DEVICES.MOBILE,
    //sulaline
    //cpid: '5da5757ea24a619db7024ffb',
    //future (3)
    //cpid: '5dc53641a24a61078e73d5ef',
    //future (2)
    cpid: '5dd5fd90a24a61c6811d3f0f',
    //future 妊娠
    //cpid: '5dc90198a24a617e8b1a315b',
    incrementMail: true,
    overrideParams: {
        mail: 'botchan_test+235_00021@wevnal.co.jp',
        password: '1111',
        product_code: '500',
        payment_type: '12',
        coupon: 'NWMVUKR8',
        quantity: '3',
        order_quantity: '3',
        //card_token: 'tok_eCB661kGUxuzxc4qVVnPhVCWjb',
    },
    flow: ['Landing', 'FillInfo', 'GetPrice', 'Order'],
};
