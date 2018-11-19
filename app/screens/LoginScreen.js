import React, { Component } from 'react';
import { Form, Item, Input, Label, ListItem, Body } from 'native-base';
//import getTheme from '../native-base-theme/components';
//import material from '../native-base-theme/variables/material';
import {View, StatusBar, Image, TouchableNativeFeedback, StyleSheet, TouchableHighlight,
 ImageBackground, Text, AsyncStorage,
 ToastAndroid, ScrollView, Dimensions} from 'react-native';
import { Icon, CheckBox, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import styles from '../styles/GlobalStyles';
const Constants = require('../styles/ColorConstants');
const T = Constants.COLOR;

const OAuth = require('oauth-1.0a');
const Crypto = require('../../crypto');
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class LoginScreen extends Component {

    constructor(props){
        super(props)
        const {navigation} = props;
        this.state={
             checked:false,
             email:'go.over3833hk@gmail.com',
             password:'password',
             lang_id: navigation.state.params.lang_id,
             showAlert: false,
             email_error:'',
             pwd_error:'',
        }
//        this.goBack = this.goBack.bind(this);
//go.over3833hk@gmail.com

    }


//    goback = ()=> {
//            const {navigation} = this.props;
//            navigation.state.params.changeName({name:'Venkatesh'});
//            navigation.goBack();
//
//      }

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


          modifyCheckUncheck = ()=> {
              if(!this.state.checked)
                  this.setState({checked:true})
              else
                  this.setState({checked:false})
          };


        validateLoginDetails = () => {
//            this.props.navigation.navigate('WelcomeScreen', null);
            const { email, password} = this.state;
            if (this.isValid()) {
                this.setState({email_error:'', pwd_error:''});
                if(this.validateEmail(email) && this.validatePassword(password)){
                    this.setState({ pwd_error:'', email_error:''});
                    this.generateAuthorizationKey();
                }
            }
        }

          //Validate email and password
          isValid(){
              const { email, password } = this.state;
              let valid = false;
              if (email.length > 0 && password.length > 0) {
                valid = true;
              }
              if (email.length === 0) {
                this.setState({ email_error: 'You must enter an email address' });
              } else if (password.length === 0) {
                this.setState({ pwd_error: 'You must enter a password', email_error:'' });
              }
              return valid;
            }

            //Validate email with regex patterns
            validateEmail(email) {
                 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 if(re.test(String(email).toLowerCase())){
                        return true;
                 }else{
                    this.setState({email_error:'invalid email'})
                 }

                 return false
            }

            //Validate password length
            validatePassword(password){
                if(password.length < 8){
                    this.setState({pwd_error:"Password length greater than 8"})
                    return false;
                }
               return true;
            }

        generateAuthorizationKey(){

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

               var SCRIPT_ID = '672'; //login
               var DEPLOYMENT_ID = '1'; //login


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
//               headers['Accept']=  'application/json';
//               alert(JSON.stringify(headers));

                this.serverCallLogin(headers, request_data.url);

        }



    serverCallLogin(headerss, url){

          var device_id = DeviceInfo.getUniqueID();
          var device_type = DeviceInfo.getSystemName();
          const{email, password, lang_id} = this.state;

          this._showAlert();
           axios.post(url, {'email':email, 'password':password, 'device_id': device_id, 'device_type':device_type, 'lang':lang_id}, { headers:headerss})
           .then((res)=>{

                  this._hideAlert();
                  if(res.data.success){

                      var USER = res.data.user;
                      AsyncStorage.setItem("isLoggedIn", JSON.stringify(true) );
//                      AsyncStorage.setItem("LoginObject", "none");
                      AsyncStorage.setItem("email", USER.email);
                      AsyncStorage.setItem("user_id", USER.id);
                       this.props.navigation.navigate('WelcomeScreen', {object:  USER } ) ;

                  }
                  else{
                      alert(res.data.message);
                  }

              }
            )
            .catch((error)=>{
                this._hideAlert();
                alert(error);
            } );
    }

    onPasswordChange = (pwd)=> {
        this.setState({password:pwd});
        if(this.validatePassword){
            this.setState({pwd_error:''})
        }
    };




  render() {
    return (
       <View style = {{flex:1}}>

             <ImageBackground
                   style={{ height: '100%', width: '100%', position: 'absolute', top:0, left:0 }}
                  source={require('../../assets/images/lang_selection_background.png')}>
            </ImageBackground>

             <ScrollView  contentContainerStyle={{ flexGrow:1 }}>
                 <View style={{flex:1, margin:20}}>
                       <View style={{flex:2, justifyContent:'center'}}>
                            <Text style={styles.text_style_yel_28}>OASYS</Text>
                            <Text style={styles.text_style}>Order Assistance System</Text>
                       </View>

                        <View style={{ flex:3, justifyContent:'center'}}>
                              <Form>
                                  <Item floatingLabel >
                                    <Label style={{color:'white', fontSize:20}}>Enter Login ID</Label>
                                    <Input style={{marginBottom:10, color:'white'}}
                                            value={this.state.email}
                                             onChangeText={(text) => this.setState({email:text})}/>


                                  </Item>
                                   <Text style={{color:'red', marginLeft:15}}>{this.state.email_error}</Text>
                                  <Item floatingLabel >
                                    <Label style={{color:'white', fontSize:20}}>Password</Label>
                                    <Input style={{marginBottom:10, color:'white'}}
                                            value={this.state.password}
                                           onChangeText={(text) => this.onPasswordChange(text)}
                                    />
                                  </Item>
                                  <Text style={{color:'red', marginLeft:15}}>{this.state.pwd_error}</Text>
                               </Form>

                               <CheckBox
                                 title='Remember Me'
                                 checked={this.state.checked}
                                 containerStyle={{backgroundColor:'transparent', borderColor:'transparent'}}
                                 textStyle={{color:'white'}}
                               />

                                 <TouchableHighlight style={[styles.button_enabled, {marginTop:10}]}
                                                     onPress={()=>this.validateLoginDetails()} underlayColor='grey' >
                                         <Text style={styles.loginText}>Login</Text>
                                 </TouchableHighlight>
                        </View>

                        <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                               <Text style={{color:'white', marginBottom:25, fontSize:16}}>Forgot Password</Text>
                               <Text style={{color:'white', marginBottom:10, fontSize:16}}>Dont have an account?</Text>
                               <Text style={styles.text_style_green_22}>Register/ Call AMBIKA</Text>
                        </View>

                         <AwesomeAlert
                              show={this.state.showAlert}
                              showProgress={true}
                              closeOnTouchOutside={false}
                              closeOnHardwareBackPress={false}

                            />
                    </View>

            </ScrollView>
       </View>
    );
  }



}





        //            var obj = {
        //              headers: headerss
        ////              body: JSON.stringify({
        ////                'client_id': '(API KEY)',
        ////                'client_secret': '(API SECRET)',
        ////                'grant_type': 'client_credentials'
        ////              })
        //            };
        ////
        //        alert(JSON.stringify(headerss) +", ");


        //             fetch(url, {headers: headerss})
        //               .then(function(res) {
        //                    alert(JSON.stringify(res.status));
        //                 return res.json();
        //                })
        //               .then(function(resJson) {
        //                 return resJson;
        //                })
        //                .catch((error) =>{
        //                        alert(error);
        //                      });
        ////


//          alert(email +", "+ password+", "+ lang_id + ", "+ device_id+", "+device_type);
//                axios.get(url,{ headers:headerss})
//                .then(function(res){
//                    alert(res.data.user.name);
//                })