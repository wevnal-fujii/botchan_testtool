module.exports = {
    Landing: {
        api: 'landing',
        interval: 1,
        params: { 
            cpid: '',
            user_id: '',
            user_agent: '',
            user_device: '',
            current_url: '',
            product_code: '' 
        }
    },
    Login: {
        api: 'login',
        interval: 1,
        params: { 
            cpid: '',
            user_id: '',
            user_device: '',
            user_agent: '',
            mail: '',
            password: '',
            product_code: '499',
            current_url: '',
        }
    },
    FillInfo: { 
        api: 'fillInfo',
        interval: 5,
        params: {
            product_code: '495',
            first_name: 'テスト',
            last_name: 'テスト',
            zipcode: '1500002',
            pref: '東京都',
            address1: '渋谷区渋谷',
            address2: '1-11-8',
            phone_number: '0357668877',
            mail: 'botchan_test+235_0010@wevnal.co.jp',
            user_id: '1575448333079hh61rDiYLKDCQH2',
            cpid: '5dc53641a24a61078e73d5ef',
            birthday: '1941-08-07',
            password: '1111',
            shipping_address_type: 'new',
            shipping_first_name: 'ウェブナル',
            shipping_last_name: 'テスト',
            shipping_furigana_first: 'ウェブナル',
            shipping_furigana_last: 'テスト',
            shipping_zipcode: '5300002',
            shipping_pref: '大阪府',
            shipping_address1: '大阪市北区曽根崎新地',
            shipping_address2: '1-13-22',
            shipping_phone_number: '0357668878',
            current_url: '',
            furigana_first: 'テスト',
            furigana_last: 'テスト',
            login_type: '2',
            address3: '渋谷パークプラザ　5F',
            shipping_address3: 'WeWork御堂筋フロンティア',
            gender: '1',
            payment_type: '11',
            card_token: 'tok_GxR3nL6vkc1VDrlE52VIwZeHB4',
            user_device: '',
            user_agent: '',
            coupon: 'NWMVUKR8',
            deliv_time: '指定なし',
            order_quantity: '3',
            quick_deliv_flg: '1',
            card_number: '8016' ,
            login_flg: '1',
            deliv_select: '0',

        }
    },
    GetPrice: {
        api: 'getPrice',
        interval: 1,
        params:  {
            product_code: '',
            payment_type: '',
            coupon: '',
            quantity: '',
        }
    },
    Order: { 
        api: 'order',
        params: {
            user_id: '',
            cpid: '',
            product_code: '495',
            user_device: '',
            user_agent: ''
        }
    }
}
