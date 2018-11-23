import React, { Component } from 'react';
import {Image, ScrollView, View, Text, StatusBar, AsyncStorage, ToastAndroid, TouchableHighlight,
 TouchableOpacity, FlatList, ActivityIndicator, TextInput} from 'react-native';
import styles from '../styles/GlobalStyles';
import AwesomeAlert from 'react-native-awesome-alerts';
import { CheckBox, FormLabel, FormInput, FormValidationMessage, ListItem} from 'react-native-elements';
const OAuth = require('oauth-1.0a');
const Crypto = require('../../crypto');
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import {ServiceHeader} from '../utils/ServiceHeaders';
const Constants = require('../styles/ColorConstants');
const T = Constants.COLOR;

import {InputGroup, Input, Item, Label, Button, Icon} from 'native-base';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class RegularOrderScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            user_id:'',
            showAlert: false,
            loading: false,
            serverData: [],
            offset:0,
            search_keyword:'',
//            isEmpty:false
        }
        AsyncStorage.getItem("user_id").then((value) => {
               this.setState({user_id: value});
        }).done();
    }



    static navigationOptions = {
        title: '',
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
//           if(!isEmpty){

                var flag = false;
                 if(this.state.offset == 0){
                       this._showAlert();
                       flag = true;

                 }else{
                      this.setState({loading:true})
                 }

                const{user_id, offset} = this.state;

                axios.get(url, { headers:headerss})
                .then((res)=>{
                        if(res.data.success){
                             this.setState({
                                serverData: [...this.state.serverData, ...res.data.data],
                                loading: false,
    //                                    isEmpty:false,
                             });
                        }else{
    //                              alert(JSON.stringify(res.data));
                                this.setState({loading:false})
                        }
                        this._hideAlert();
                        flag = false;
                   }
                 )
                 .catch((error)=>{
                     this._hideAlert();
                     alert('Err: '+JSON.stringify(error.response.data));
                 });
//              }
         }


        componentDidMount(){
//                this.setState({isEmpty:false});
              this.getRegularOrderItemsFromServer();
        }


        getRegularOrderItemsFromServer(){
               var aa = ServiceHeader(this.state.user_id, this.state.offset, this.state.search_keyword);
               this.getItems(aa.headers, aa.url);
        }


//        loadMoreData = () => {
//            this.setState({
//                loading: true,
//            },
//            () => {
//                      var aa = ServiceHeader(this.state.user_id, this.state.offset, this.state.search_keyword);
//                      this.getItems(aa.headers, aa.url);
//            });
//        };


        renderFooter(){
           if (!this.state.loading) return null;
           return (
                 <View style={styles.flatListProgress}>
                   <ActivityIndicator animating size="large" />
                 </View>
               );
        }


        handleLoadMore = () => {
            this.setState({
                offset: this.state.offset + 1
              },
              () => {
                 var aa = ServiceHeader(this.state.user_id, this.state.offset, this.state.search_keyword);
                 this.getItems(aa.headers, aa.url);
              }
            );
        };


        clickSearch = () => {
            this.setState({
                offset: 0,
                serverData:[],
              },
              () => {
                 var aa = ServiceHeader(this.state.user_id, this.state.offset, this.state.search_keyword);
                 this.getItems(aa.headers, aa.url);
              }
            );
        };


        iterateFlatListItem = ({ item, index}) => {
            return(
             <View style={styles.flatListItem}>
                     <View style={{width:'30%', height:'100%'}}>
                        <Image source={item.thumbnailurl?{uri:item.thumbnailurl}:
                                require('../../assets/images/groceries.jpg')}
                                 style={{width:80, height: 80, borderRadius:6}} />
                     </View>
                     <View style={{width:'70%', height:'100%'}}>
                           <Text>  {item.displayname}</Text>
                           <Text>  {item.baseprice}</Text>
                           <Text>  {item.taxrate}</Text>
                           <Text>  {item.count}</Text>

                           <View style={{backgroundColor:'transparent', width:'100%', flexDirection:'row'}}>

                            </View>
                     </View>
            </View>
        );

        };


        render(){

            return(
                <View style={styles.regularOrderScreenParent}>
                     <StatusBar backgroundColor= {T.YELLOW} barStyle="light-content"/>
                      <View style={styles.searchSectionParent}>
                           <View style={styles.searchSection}>
                               <TextInput
                                   style={styles.searchInputText}
                                   placeholder="Search Product"
                                   placeholderTextColor='#fff'
                                   onChangeText={(searchString) => {this.setState({search_keyword:searchString})}}/>
                               <Icon style={styles.searchIcon} name="search"
                                     size={20} color="#fff"
                                     onPress={()=>this.clickSearch()}/>
                           </View>
                      </View>

                    <View style={[{flex:3, width:'100%', backgroundColor:'#fff'}]}/>
                    <View style={styles.flatListParent}>
                        <FlatList style={styles.flatListSection}
                            keyExtractor={(item, index) => index.toString()}
                            data = {this.state.serverData}
                            renderItem={this.iterateFlatListItem}
                            ListFooterComponent={this.renderFooter.bind(this)}
                            onEndReachedThreshold={1}
                            onEndReached={this.handleLoadMore}/>
                     </View>

                    <AwesomeAlert
                        show={this.state.showAlert}
                        showProgress={true}
                        closeOnTouchOutside={false}
                        closeOnHardwareBackPress={false}/>
                </View>

            );
        }
}



//              <View style={styles.footer}>
//                    <TouchableOpacity activeOpacity={0.9} onPress={this.loadMoreData} style={styles.loadMoreBtn}>
//                    <Text style={styles.btnText}>Load More</Text>
//                    {this.state.loading ? (<ActivityIndicator color='black' style={{ marginLeft: 8}}/>) : null}
//                    </TouchableOpacity>
//                </View>

