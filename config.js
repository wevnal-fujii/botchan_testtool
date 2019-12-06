const crypto = require('crypto');
const DEVICES = {
    PC: 'pc',
    MOBILE: 'mobile'
};

const USER_AGENT = {
    [DEVICES.PC]: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
    [DEVICES.MOBILE]: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/78.0.3904.84 Mobile/15E148 Safari/604.1',
};

module.exports = {
    HOST: 'http://localhost:3000/',
    URL: 'http://localhost:3000/api/{{bot}}/{{api}}',
    DEVICES,
    USER_AGENT,
    CURRENT_URL: 'https://admin.botchan.chat/bot/{{cpid}}/scenario',
    USER_ID: crypto.randomBytes(16).toString('hex')
}
