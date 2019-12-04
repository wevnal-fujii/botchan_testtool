module.exports = {
    Landing: {
        api: 'landing',
        interval: 1,
        params: {
            cpid: '',
            user_id: '',
            user_agent: '',
            user_device: '',
            landing_url:'https://admin.botchan.chat/bot/5da5757ea24a619db7024ffb/scenario' 
        }
    },
    FillInfo: {
        api: 'fillInfo',
        interval: 5,
        params: {
            cpid: '',
            user_id: '',
            user_device: '',
            user_agent: '',
            product_code: '1',
            current_url: '',
            name: 'テスト テスト',
            furigana: 'テスト テスト',
            zipcode: '1500002',
            pref: '東京都',
            address1: '渋谷区渋谷',
            address2: '1-11-8',
            address3: '渋谷パークプラザ 5F',
            phone_number: '0357668877',
            mail: 'botchan_test+198_0044@wevnal.co.jp',
            melmaga: '',
            shipping_address_type: 'same',
            shipping_name: '',
            shipping_furigana: '',
            shipping_zipcode: '',
            shipping_pref: '',
            shipping_address1: '',
            shipping_address2: '',
            shipping_address3: '',
            shipping_phone_number: '',
            payment_type: '19',
            card_token: '',
            card_select: '',
        }
    },
    Order: {
        api: 'order', 
        params: {
            cpid: '',
            user_id: '',
            user_device: '',
            user_agent: '',
            upsell: '1',
        }
    }
}
