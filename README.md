# Botchan 簡易テストツール

# USAGE

```bash
cd botchan_testtool
npm install
# テストするbotによって変更すべき設定
vi settings.js

# 環境や都合によって変更すべき設定
vi config.js

# パラメータ設定
vi bots/${bot_name}.js

npm test
```


## Settings.js
テスト毎に変更するデータを記述します。

#### bot
bot名を指定します。
ここの名前をファイル名としてbots/以下のパラメータファイルをロードします。
```
bot: 'futuregate'
``` 

#### device
テストに使用するデバイスを指定します。
config.DEVICESを使用出来ます。
PC/MOBILE
```
device: config.DEVICES.PC
```

#### cpid
テストを行うbotのcpidを指定します。

```
cpid: '5dc53641a24a61078e73d5ef'
```

#### incrementMail
メールアドレスの自動インクリメント実行の可否を指定します。
settings.jsにmailキーで指定されたメールアドレスの内、4桁の数字にマッチングし、インクリメントを行います。

```
incrementMail: true
```


#### overrideParams
各APIへpostするパラメータ(bots/)をオーバーライドします。

```
overrideParams: {
    mail: 'botchan_test+235_00021@wevnal.co.jp',
    password: '1111',
    product_code: '500',
    payment_type: '12',
    quantity: '3',
    order_quantity: '3',
}
 ```

#### flow
APIリクエストを発行する順番を指定します。

```
flow: ['Landing', 'FillInfo', 'GetPrice', 'Order'],
```


## bots

botsディレクトリ下に`bot名.js`としてファイルを作成します。

ルートオブジェクト下に`settings.js`の`flow`で指定したキーでオブジェクトを作成します。

#### api
apiのパスを指定します。
```
api: 'landing'
// access to `${CONFIG.HOST}/api/${bot名}/landing
```

#### interval
API呼び出し後に待機する時間をsecで指定します。
```
interval: 1
```

### params
postするデータを指定します。
基本的にここで指定したオブジェクトの値はそのまま使用されますが、settings.jsでoverrideParamsに同じキーが存在する場合、その値で上書きされます。

```
params: {
    cpid: '',
    user_id: '',
    user_agent: '',
    user_device: '',
    current_url: '',
    product_code: ''
}
```

## config.js

#### HOST
ベースとなるホスト名を指定します。

#### URL
URLパターンを指定します。

#### DEVICES
使用できるデバイスのリストです。

#### USER_AGENT
デバイスが使用するuser agentです。

#### CURRENT_URL
current_urlに指定される値のパターンです。

#### USER_ID
user_idに使用される値です。
テスト毎にuser_idを発行しますが、overrideParamsにuser_idを使用することで固定することが出来ます。
