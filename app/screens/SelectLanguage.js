import React, { Component } from 'react';
//import { Container, Header, Left, Body, Right, Title } from 'native-base';
import {View, StatusBar, Image, TouchableNativeFeedback, StyleSheet, TouchableHighlight,
 ImageBackground, Text,
 ToastAndroid} from 'react-native';
//import FitImage from 'react-native-fit-image';
//import {Accordionm, Button, Text} from 'native-base';
import styles from '../styles/GlobalStyles';

const Constants = require('../styles/ColorConstants');
const T = Constants.COLOR;

export default class SelectLanguage extends Component {


    constructor(props){
        super(props)
        this.state = {
            name: '',
        }
    }

   static navigationOptions = {
        title: 'Select Language',
        headerTintColor: '#f9a825',
        headerStyle: {
              backgroundColor: 'white',
            },
        headerTitleStyle:{
            textAlign:'center',
            flex:1,
        }
   }

   SelectLangToGoToLoginScreen = (language_id)=>{
        this.props.navigation.navigate('LoginScreen', {'lang_id':language_id, changeName: this.changeName});
   }

   changeName = data => {
        this.setState(data);
   };

    onPressTitle = () => {
        this.props.navigation.navigate('Dashboard', null);
    };

  render() {
    return (

      <View style={{backgroundColor:T.TRANSPARENT, flex:1}}>
        <StatusBar
             backgroundColor="black"
             barStyle="light-content"
           />

       <ImageBackground
              style={{ flex: 1}}
              imageStyle={{resizeMode: 'stretch'}}
              source={require('../../assets/images/lang_selection_background.png')}>


                 <View style={{flex:1}}>


                           <View style={{flex:4, alignItems:'center', justifyContent:'center'}}>
                               <Image style={{width: 180, height:180}}
                                 source={require('../../assets/images/logo_round.png')}
                               />
                           </View>

                           { ToastAndroid.show(this.state.name, ToastAndroid.SHORT) }

                            <View style={{ flex:1}}>
                                <Text style={{color:'white', textAlign:'center', fontSize:24}}> Select Language</Text>
                            </View>

                           <View style={{ flex:4}}>

                              <TouchableHighlight style={styles.button_style_transparent} onPress={() => this.SelectLangToGoToLoginScreen(1)} underlayColor={T.TRANSPARENT}>
                                       <Text style={[styles.inner_container, styles.customFont, { color:T.BLUE}]} >English</Text>
                              </TouchableHighlight>

                              <TouchableHighlight style={styles.button_style_transparent} onPress={() => this.SelectLangToGoToLoginScreen(2)} underlayColor={T.TRANSPARENT}>
                                     <Text style={[styles.inner_container, styles.customFont, {color:T.GREEN}]} >Hindi</Text>
                             </TouchableHighlight>

                             <TouchableHighlight style={styles.button_style_transparent} onPress={() => this.SelectLangToGoToLoginScreen(3)} underlayColor={T.TRANSPARENT}>
                                        <Text style={[styles.inner_container, styles.customFont, {color:T.RED}]} >Japanese</Text>
                               </TouchableHighlight>

                               <TouchableHighlight style={styles.button_style_transparent} onPress={() => this.SelectLangToGoToLoginScreen(4)} underlayColor={T.TRANSPARENT}>
                                      <Text style={[styles.inner_container, styles.customFont, {color:T.YELLOW}]} >Nepali</Text>
                              </TouchableHighlight>

                           </View>



                    </View>
            </ImageBackground>







      </View>

    );
  }
}

