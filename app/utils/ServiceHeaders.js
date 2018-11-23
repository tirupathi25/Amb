const OAuth = require('oauth-1.0a');
const Crypto = require('../../crypto');
import DeviceInfo from 'react-native-device-info';


export function ServiceHeader(user_id, index, search_keyword) {


    const oauth = OAuth({
           realm:'4554399',
           consumer: {
               key: 'e140d524d4f9f1b9a86d6022efa89c50946c91ff3e08609739e8db90033ae1b2',
               secret: '4035c187306b2f221ebda04d7bb8c7f0fbffdd54c4708239437375862f9b2da0'
           },
           signature_method: 'HMAC-SHA1',
           hash_function(base_string, key) {
               return Crypto.createHmac('sha1', key).update(base_string).digest('base64');
           }
       });

       var SCRIPT_ID = '674'; //Regular Items
       var DEPLOYMENT_ID = '1'; //
//        const index = 0;

       // Note: The token is optional for some requests
       const token = {
           key: '314961be48168bee1464788c61a47075d2c011ca0fd57482fb6e5ec461d36247',
           secret: '15b2ea57a05ce66dec7916812fe7219337cee16f024ced12bf55d38deedc9cbf'
       };

       const request_data = {
           url: 'https://4554399.restlets.api.sandbox.netsuite.com/app/site/hosting/restlet.nl?script='+SCRIPT_ID+'&deploy='+DEPLOYMENT_ID+
           '&index='+index+'&customer_id='+user_id+'&term='+search_keyword,
//                   +'&device_id='+device_id+"&device_name="+DeviceInfo.getSystemName()
           method: 'GET'

       };

       var headers = oauth.toHeader(oauth.authorize(request_data, token));
       headers['Content-Type'] =  'application/json';

       const obj = {'headers': headers, 'url':request_data.url};


  return obj;
};