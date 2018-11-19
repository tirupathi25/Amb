import React, { Component } from 'react';
import {Image, ScrollView, View, Text, StatusBar, AsyncStorage, ToastAndroid, TouchableHighlight,
 TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import styles from '../styles/GlobalStyles';
import AwesomeAlert from 'react-native-awesome-alerts';


const OAuth = require('oauth-1.0a');
const Crypto = require('../../crypto');
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import {ServiceHeader} from '../utils/ServiceHeaders';

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

//                    this._showAlert();
                    axios.get(url, { headers:headerss})
                    .then((res)=>{
                            this.offset = this.offset + 1;
//                          this._hideAlert();

                          this.setState({
                                     serverData: [...this.state.serverData, ...res.data.data],
                                    loading: false,
                                 });
                       }
                     )
                     .catch((error)=>{
//                         this._hideAlert();
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
                                     paddingTop: 30, backgroundColor:'#FEC107'}}>


                            {this.state.loading ? (<ActivityIndicator size="large" />) : (
                                        <FlatList style={{ flex:1,width:'90%', backgroundColor:'#fff', borderRadius:10,
                                        marginLeft:20, marginRight:20, marginTop:20}}

                                        keyExtractor={(item, index) => index}
                                        data = {this.state.serverData}
                                        renderItem={({ item, index}) => (
                                            <View style={{padding:10}}>
                                            <Text style={{ fontSize: 15, color: 'black',}}>
                                            {item.values.displayname}</Text>
                                            </View>
                                        )}
                                        ListFooterComponent={this.renderFooter.bind(this)}
                                        ItemSeparatorComponent={() => <View style={styles.seperator}/>}
                                        />
                                    )}

                </View>

            );
        }
}

//    <AwesomeAlert
//                              show={this.state.showAlert}
//                              showProgress={true}
//                              closeOnTouchOutside={false}
//                              closeOnHardwareBackPress={false}
//
//                            />