import React, { Component } from 'react';

import {Image, ScrollView, View, Text, StatusBar, AsyncStorage, ToastAndroid, TouchableHighlight, TouchableOpacity} from 'react-native';
//import getTheme from '../native-base-theme/components';
//import material from '../native-base-theme/variables/material';

const Constants = require('../styles/ColorConstants');
const T = Constants.COLOR;

//import HeaderGlobal from './HeaderGlobal';
import styles from '../styles/GlobalStyles';
import {Card, Avatar, Header, ButtonGroup} from 'react-native-elements';

import Icon from "../components/Icon";

const OAuth = require('oauth-1.0a');
const Crypto = require('../../crypto');
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';

 import Grid from 'react-native-grid-component';


export default class Dashboard extends Component {


    constructor(props){
        super(props)
        this.state={
            user_id:'',
              name: 'Hi',
               showAlert: false,
        }

   AsyncStorage.getItem("user_id").then((value) => {
                   this.setState({user_id: value});
           }).done();


    }

    componentDidMount(){

//           alert(this.state.user_id);
    }

logout = ()=>{

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

                    var SCRIPT_ID = '673'; //logout
                    var DEPLOYMENT_ID = '1'; //logout


                    // Note: The token is optional for some requests
                    const token = {
                        key: '314961be48168bee1464788c61a47075d2c011ca0fd57482fb6e5ec461d36247',
                        secret: '15b2ea57a05ce66dec7916812fe7219337cee16f024ced12bf55d38deedc9cbf'
                    };

                    const request_data = {
                        url: 'https://4554399.restlets.api.sandbox.netsuite.com/app/site/hosting/restlet.nl?script='+SCRIPT_ID+'&deploy='+DEPLOYMENT_ID,
     //                   +'&device_id='+device_id+"&device_name="+DeviceInfo.getSystemName()
                        method: 'POST'

                    };

                    var headers = oauth.toHeader(oauth.authorize(request_data, token));
                    headers['Content-Type'] =  'application/json';

                    this.serverCallLogout(headers, request_data.url);



}

        _showAlert = () => {
            this.setState({
              showAlert: true
            });
          };

          _hideAlert = () => {
            this.setState({
              showAlert: false
            });
          };


    serverCallLogout(headerss, url){

          var device_id = DeviceInfo.getUniqueID();
          var device_type = DeviceInfo.getSystemName();
          const{user_id} = this.state;

          this._showAlert();
          axios.post(url, {'customerId':user_id}, { headers:headerss})
          .then((res)=>{

                this._hideAlert();
                if(res.data.success){
                     AsyncStorage.setItem("isLoggedIn", JSON.stringify(false) );
                     AsyncStorage.clear();
                     alert("Logout successful");
                     this.props.navigation.navigate('SelectLanguage', null ) ;
                 }
                 else{
                     alert("Fail: "+ res.data );
                 }
             }
           )
           .catch((error)=>{
               this._hideAlert();
               alert("Error: "+error.response);
           });
    }

    // not in use

    selectButton = () => {
    };

//
//    const component1 = () => <Text>Hello</Text>
//    const component2 = () => <Text>World</Text>
//    const component3 = () => <Text>ButtonGroup</Text>

 _renderItem = (data, i) => (

        <TouchableOpacity  style={[{ backgroundColor: data, alignItems:'center', justifyContent:'center' }, styles.item]} key={i}
        onPress={()=> this.props.navigation.navigate('TabsHome', null )}>
            <Icon
                name="exit"
                color='#fff'
                onPress={() => this.logout}
                underlayColor={'#64b5f6'}
                size={30}
                style={{marginRight:5}}
              />
              <Text style={{  fontSize:18, color:'#fff' }} > {data} </Text>
        </TouchableOpacity>

     );

  render() {


  const users = [
           {
              name: 'brynn',
              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
           },
           {
                 name: 'brynn',
                 avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
              },
          {
                    name: 'brynn',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                 },
             {
                   name: 'brynn',
                   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                },
          ]

            const buttons = ['Mutsoko Suziki', 'Gold Member', 'Ambica'];

    return (
        <View style = {{flex:1, backgroundColor:'#fff'}}>




            <StatusBar backgroundColor= {T.TRANSPARENT} barStyle="dark-content"/>
                <View>
                  <Header
                    outerContainerStyles={styles.topMenu}
                    centerComponent={{
                      text: 'Dashboard',
                      style: { color: 'black', fontWeight: 'bold', fontSize: 18 },
                    }}

                    rightComponent={
                        <View style={{ flexDirection:'row',  flex:1}}>
                            <Icon
                                name="exit"
                                color='black'
                                onPress={() => this.logout()}
                                underlayColor={'#64b5f6'}
                                size={22}
                                style={{marginRight:5}}
                              />
                        </View>
                    }

                    leftComponent={
                      <Icon
                        name="list"
                        color='black'
                        onPress={() => console.log('pressed')}
                        underlayColor={'#64b5f6'}
                        size={22}
                      />
                    }
                  />
              </View>

            <ButtonGroup
                onPress={()=>this.selectButton()}
                selectedIndex={1}
                buttons={buttons}
                containerStyle={{height: 40}}
                style={{borderColor:'red', borderWidth:4, borderRadius:5, backgroundColor:'red'}}/>


            <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center'}}>
               <Grid
                 style={{flex:1}}
                 renderItem={this._renderItem}
                 renderPlaceholder={this._renderPlaceholder}
                 data={['#E91D62', 'orange', 'red', 'green', 'blue', 'yellow', 'skyblue', 'grey']}
                 itemsPerRow={2}
               />
            </View>


            <AwesomeAlert
                  show={this.state.showAlert}
                  showProgress={true}
                  closeOnTouchOutside={false}
                  closeOnHardwareBackPress={false}

                />

        </View>
    );
  }



}



//                 { ToastAndroid.show(this.state.user_id, ToastAndroid.SHORT) }



