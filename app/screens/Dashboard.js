import React, { Component } from 'react';

import {Image, ScrollView, View, Text, StatusBar, AsyncStorage,
 ToastAndroid, TouchableHighlight, TouchableOpacity} from 'react-native';
//import getTheme from '../native-base-theme/components';
//import material from '../native-base-theme/variables/material';

const Constants = require('../styles/ColorConstants');
const T = Constants.COLOR;

//import HeaderGlobal from './HeaderGlobal';
import styles from '../styles/GlobalStyles';
import {Card, Avatar, Header, ButtonGroup, Divider, SocialIcon } from 'react-native-elements';

import Icon from "../components/Icon";
import LinerIcon from "../components/LinerIcon";

const OAuth = require('oauth-1.0a');
const Crypto = require('../../crypto');
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';
import { strings, setLanguage } from '../utils/i18n';

import Grid from 'react-native-grid-component';


export default class Dashboard extends Component {


    constructor(props){
        super(props)
        this.state={
            user_id:'',
              name: 'Hi',
               showAlert: false,
               progress:true,
               msg:null,
               title:null,
               confirmButtonVisibility:true,
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
            this.setState({msg:null, title:null, confirmButtonVisibility:false, progress:true});
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

    clickItem = (icon_name) => {
        switch(icon_name){
            case 'cart':
                this.props.navigation.navigate('RegularOrderScreen', null );
                break;
             case 'disc':
                 this.showUrgentOrderAlert();
                break;
        }
    };

    showUrgentOrderAlert(){
     this.setState({msg:strings('urgent_order_alert'), showAlert:true, progress:false, title:"Alert", confirmButtonVisibility:true});
     this._showAlert();
    }


 _renderItem = (data, i) => (

        <TouchableOpacity  style={[{ backgroundColor: data.color, alignItems:'center', justifyContent:'center' }, styles.item]} key={i}
        onPress={()=>this.clickItem(data.icon_name) }>
            <Icon
                name= {data.icon_name}
                color='#fff'
                onPress={() => this.logout}
                underlayColor={'#64b5f6'}
                size={30}
              />
              <Text style={{  fontSize:16, color:'#fff', textAlign:'center' }} > {data.text_name} </Text>
        </TouchableOpacity>

     );

      _renderSocialItem = (data, i) => (

             <TouchableOpacity  style={[{ backgroundColor: data.color, alignItems:'center', justifyContent:'center' }, styles.item]} key={i}
             onPress={()=> this.props.navigation.navigate('', null )}>
                 <SocialIcon
                     type= {data.icon_name}
                     color='#fff'
                     onPress={() => this.logout}
                     underlayColor={'#64b5f6'}
                     size={32}
                   />
                   <Text style={{  fontSize:16, color:'#fff', textAlign:'center' }} > {data.text_name} </Text>
             </TouchableOpacity>

          );


  render() {

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

            <ScrollView  contentContainerStyle={{ flexGrow:1 }}>
                <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center'}}>
                   <Grid
                     style={{flex:1}}
                     renderItem={this._renderItem}
                     renderPlaceholder={this._renderPlaceholder}
                     itemsPerRow={2}
                       data={[{'color':'#E91D62', 'icon_name':'cart', 'text_name':strings('regular_order.one')},
                          {'color':'#9C2881', 'icon_name':'disc', 'text_name':strings('regular_order.two')},
                           {'color':'#2196F3', 'icon_name':'document', 'text_name':strings('regular_order.three')},
                         {'color':'#02BD14', 'icon_name':'alert', 'text_name':strings('regular_order.four')},
                          {'color':'#FEC107', 'icon_name':'microphone', 'text_name':strings('regular_order.five')},
                          {'color':'#9E9E9E', 'icon_name':'aperture', 'text_name':strings('regular_order.six')},
                            {'color':'#1B4FA8', 'icon_name':'list-box', 'text_name':strings('regular_order.seven')},
                             {'color':'#46E855', 'icon_name':'megaphone', 'text_name':strings('regular_order.eight')},
                             {'color':'#F44337', 'icon_name':'alarm', 'text_name':strings('regular_order.nine')}]}
                   />

                    <View style={{marginTop:10}}>
                        <View style ={styles.seperator}/>
                        <Text style={{fontSize:20, margin:10, color:'black'}}>{strings('social_network')}</Text>
                         <Grid
                             style={{flex:1}}
                             renderItem={this._renderSocialItem}
                             renderPlaceholder={this._renderPlaceholder}
            //                 data={[{'color':'#E91D62'}, 'orange', 'red', 'green', 'blue', 'yellow', 'skyblue', 'grey']}
                             data={[{'color':'#3B5998', 'icon_name':'facebook', 'text_name':strings('social.facebook')},
                              {'color':'#395976', 'icon_name':'tumblr', 'text_name':strings('social.tumblr')},
                               {'color':'#6A453B', 'icon_name':'instagram', 'text_name':strings('social.instagram')},
                             {'color':'#C4302B', 'icon_name':'youtube', 'text_name':strings('social.youtube')}]}
                             itemsPerRow={2}
                           />

                   </View>
                </View>
              </ScrollView>

            <AwesomeAlert
                  show={this.state.showAlert}
                  showProgress={this.state.progress}
                  message={this.state.msg}
                  closeOnTouchOutside={false}
                  closeOnHardwareBackPress={false}
                  title={this.state.title}
                  showConfirmButton={this.state.confirmButtonVisibility}
                  confirmText="ok"
                  onConfirmPressed={() => {
                          this._hideAlert();
                        }}
                />

        </View>
    );
  }



}



//                 { ToastAndroid.show(this.state.user_id, ToastAndroid.SHORT) }



//
//                       data={[{'color':'#E91D62', 'icon_name':'cart', 'text_name':strings('regular_order.one')},
//                      {'color':'#9C2881', 'icon_name':'disc', 'text_name':strings('regular_order.two')},
//                       {'color':'#2196F3', 'icon_name':'document', 'text_name':strings('regular_order.three')},
//                     {'color':'#02BD14', 'icon_name':'alert', 'text_name':strings('regular_order.four')},
//                      {'color':'#FEC107', 'icon_name':'microphone', 'text_name':strings('regular_order.five')},
//                      {'color':'#9E9E9E', 'icon_name':'aperture', 'text_name':strings('regular_order.six')},
//                        {'color':'#1B4FA8', 'icon_name':'list-box', 'text_name':strings('regular_order.seven')},
//                         {'color':'#46E855', 'icon_name':'megaphone', 'text_name':strings('regular_order.eight')},
//                         {'color':'#F44337', 'icon_name':'alarm', 'text_name':strings('regular_order.nine')}]}