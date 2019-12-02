const axios = require('axios');
const qs = require('querystring');  
const url = 'https://nocor.jp/shopping/lp_ajax.php?p=snt_cpn2_botchan';
const data = {
    action: 'checkCoupon',
    //code: 'NWMVUKR8',
    code: 'TEST',
    product_id: 507,
    quantity: 2,
    classcategory_id1: null,
    classcategory_id2: null,
    regular: 1,
    timeStamp: Date.now(),
}

const qsd = qs.stringify(data);
console.log(qsd);

const option = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    }
};


axios.post(url, qsd, option).then(res => res.data)
    .then(({ success, use_coupon }) => console.log(success, use_coupon)).catch(err => console.log(err));
