import React, { Component } from 'react';
import {Image, ScrollView, View, Text, StatusBar, AsyncStorage, ToastAndroid, TouchableHighlight,
 TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import styles from '../styles/GlobalStyles';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Icon, CheckBox, FormLabel, FormInput, FormValidationMessage, ListItem} from 'react-native-elements';
const OAuth = require('oauth-1.0a');
const Crypto = require('../../crypto');
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import {ServiceHeader} from '../utils/ServiceHeaders';
const Constants = require('../styles/ColorConstants');
const T = Constants.COLOR;

import {InputGroup, Input, Item, Label} from 'native-base';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class RegularOrderScreen extends Component {


    constructor(props){
        super(props)
        this.state={
            user_id:'',
            showAlert: false,
            loading: true,
            serverData: [],
            fetching_from_server: true,
        }
        this.offset = 0;

         AsyncStorage.getItem("user_id").then((value) => {
                           this.setState({user_id: value});
                   }).done();



    }

    static navigationOptions = {
        title: 'Back',
        headerStyle: {
          backgroundColor:'#FEC107',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

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

           getItems(headerss, url){

//                    var device_id = DeviceInfo.getUniqueID();
//                    var device_type = DeviceInfo.getSystemName();
                    const{user_id} = this.state;

                    this._showAlert();
                    axios.get(url, { headers:headerss})
                    .then((res)=>{
                            this.offset = this.offset + 1;
                          this.getItems();
//                            alert(JSON.stringify(res.data.data));
                          this.setState({
                                     serverData: [...this.state.serverData, ...res.data.data],
                                    loading: false,
                                 });
                       }
                     )
                     .catch((error)=>{
                         this._hideAlert();
                         alert('Err: '+JSON.stringify(error.response.data));
                     });
              }


        componentDidMount(){

//             var aa = ServiceHeader(this.state.user_id, 0);
//             alert(JSON.stringify(aa.headers)+",......\n "+JSON.stringify(aa.url));

              this.getRegularOrderItemsFromServer()
        }

        getRegularOrderItemsFromServer(){

                       var aa = ServiceHeader(this.state.user_id, this.offset);
                       this.getItems(aa.headers, aa.url);
        }


        loadMoreData = () => {
            this.setState({
                fetching_from_server: true,
            },
            () => {
                      var aa = ServiceHeader(this.state.user_id, this.offset);
                      this.getItems(aa.headers, aa.url);
            });
        };



        renderFooter(){
            return(

                <View style={styles.footer}>
                    <TouchableOpacity activeOpacity={0.9} onPress={this.loadMoreData} style={styles.loadMoreBtn}>
                    <Text style={styles.btnText}>Load More</Text>
                    {this.state.fetching_from_server ? (<ActivityIndicator color='black' style={{ marginLeft: 8}}/>) : null}
                    </TouchableOpacity>
                </View>
            );
        }




        render(){

            return(
                <View style={{flex: 1,
                                     justifyContent: 'center',
                                     alignItems:'center',
                                     backgroundColor:'#fff'}}>

                 <StatusBar backgroundColor= {T.YELLOW} barStyle="light-content"/>

                 <View style={{backgroundColor:T.YELLOW, flex:1,  width:'100%', padding:15}}>
                    <Item  >
                    <Label style={{color:'#fff', fontSize:22}}>Search...</Label>
                            <Input style={{marginBottom:5, color:'white'}}
                                   value={''}
                                   onChangeText={(text) => this.onPasswordChange(text)}

                            />
                          </Item>
                 </View>

                <View style={[styles.card_style, {flex:3, width:'100%', backgroundColor:'#fff'}]}>


                        <FlatList style={{ flex:1,width:'90%', backgroundColor:'#fff', borderRadius:10,
                        marginLeft:20, marginRight:20, marginTop:20}}

                        keyExtractor={(item, index) => index}
                        data = {this.state.serverData}
                        renderItem={({ item, index}) => (
                            <View style={{padding:1}}>
                              <ListItem
                                  title={item.values.displayname}
                                  subtitle={item.values.baseprice}
                                  leftAvatar={{ source: { uri: item.values.imageurl===''?
                                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg':item.values.imageurl } }}
                                />
                            </View>
                        )}
                        ListFooterComponent={this.renderFooter.bind(this)}
                        />

                     <AwesomeAlert
                          show={this.state.showAlert}
                          showProgress={true}
                          closeOnTouchOutside={false}
                          closeOnHardwareBackPress={false}
                        />

                </View>



                </View>

            );
        }
}

//   <InputGroup style={{flex:1, color:'white', margin:10}} borderType="underline" >
//                    <Icon name={'search'} size={27} color={'white'}/>
//                    <Input placeholder="Search" style={{color:'#fff'}}/>
//                </InputGroup>


