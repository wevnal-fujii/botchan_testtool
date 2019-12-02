const axios = require('axios');
const crypto = require('crypto');
const { USER_AGENT, CURRENT_URL: CURRENT_URL_BASE, USER_ID: user_id} = require('./config');
const { bot, device, cpid, mail, product_code, } = require('./settings');
const current_url = CURRENT_URL_BASE.replace(/{{cpid}}/, cpid);

const landingParams = { 
    cpid,
    user_id,
    user_agent: USER_AGENT[device],
    user_device: device,
    current_url,
    product_code: '494' 
};

const fillInfoParams = {
    cpid,
    user_id,
    user_agent: USER_AGENT[device],
    user_device: device,
    current_url,
    product_code,
    order_quantity: '1',
    first_name: 'テスト',
    last_name: 'テスト',
    furigana_first: 'テスト',
    furigana_last: 'テスト',
    zipcode: '1500002',
    pref: '東京都',
    address1: '渋谷区渋谷',
    address2: '1-11-8',
    address3: '渋谷パークプラザ　5F',
    phone_number: '0357668877',
    mail,
    melmaga: '',
    password: '1111',
    birthday: '1938-11-05',
    gender: '1',
    shipping_address_type: 'same',
    shipping_first_name: '',
    shipping_last_name: '',
    shipping_furigana_first: '',
    shipping_furigana_last: '',
    shipping_zipcode: '',
    shipping_pref: '',
    shipping_address1: '',
    shipping_address2: '',
    shipping_address3: '',
    shipping_phone_number: '',
    deliv_date: '',
    deliv_time: '指定なし',
    quick_deliv_flg: '1',
    coupon: '',
    payment_type: '2',
    card_token: '',
    card_number: '',
    card_select: '',
    login_flg: '' 
}

const orderParams = {
    cpid,
    user_id,
    user_agent: USER_AGENT[device],
    user_device: device,
    mail,
    product_code,
}

const landing = async () => {
    const data = await axios.post('http://localhost:3000/api/futuregate/landing', landingParams)
        .then(res => res.data);
    console.log(data);
};

const fillInfo = async () => {
    const data = await axios.post('http://localhost:3000/api/futuregate/fillInfo', fillInfoParams)
        .then(res => res.data);
    console.log(data);
};

const order = async () => {
    const data = await axios.post('http://localhost:3000/api/futuregate/order', orderParams)
        .then(res => res.data);
    console.log(data);
}

const waitForSec = sec => new Promise(res => setTimeout(res, sec * 1000));

(async () => {
    const url = 'https://token.paygent.co.jp/n/token/request';
    const body = {
        merchant_id: '32070',
        token_generate_key: 'live_PzOX1x1LKxpJRo4kuDDMeseD',
        crad_number: '4980036521006148',
        card_expire_year: '21',
        card_expire_month: '02',
        card_cvc: '',
        card_name: 'RYO%20FUJII'
    }
    const data =await axios.post(url, body).then(res => res.data);
    console.log(data);
    /*
    await landing();
    await waitForSec(5);
    await fillInfo();
    await waitForSec(5);
    await order();
    */
})();


