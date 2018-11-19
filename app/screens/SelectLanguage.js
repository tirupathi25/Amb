import React, { Component } from 'react';
//import { Container, Header, Left, Body, Right, Title } from 'native-base';
import {View, StatusBar, Image, TouchableNativeFeedback, StyleSheet, TouchableHighlight,
 ImageBackground, Text,
 ToastAndroid} from 'react-native';
//import FitImage from 'react-native-fit-image';
//import {Accordionm, Button, Text} from 'native-base';
import styles from '../styles/GlobalStyles';
import { strings, setLanguage } from '../utils/i18n';

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

   SelectLangToGoToLoginScreen = (language_id, lang)=>{


     setLanguage(lang);
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


                            <View style={{ flex:1}}>
                                <Text style={{color:'white', textAlign:'center', fontSize:24}}> Select Language</Text>
                            </View>

                           <View style={{ flex:4}}>

                              <TouchableHighlight style={styles.button_style_transparent} onPress={() => this.SelectLangToGoToLoginScreen(1, 'en')} underlayColor={T.TRANSPARENT}>
                                       <Text style={[styles.inner_container, styles.customFont, { color:T.BLUE}]} >{strings('languages.english')}</Text>
                              </TouchableHighlight>

                              <TouchableHighlight style={styles.button_style_transparent} onPress={() => this.SelectLangToGoToLoginScreen(2, 'hi')} underlayColor={T.TRANSPARENT}>
                                     <Text style={[styles.inner_container, styles.customFont, {color:T.GREEN}]} >{strings('languages.hindi')}</Text>
                             </TouchableHighlight>

                             <TouchableHighlight style={styles.button_style_transparent} onPress={() => this.SelectLangToGoToLoginScreen(3, 'ja')} underlayColor={T.TRANSPARENT}>
                                        <Text style={[styles.inner_container, styles.customFont, {color:T.RED}]} >{strings('languages.japanese')}</Text>
                               </TouchableHighlight>

                               <TouchableHighlight style={styles.button_style_transparent} onPress={() => this.SelectLangToGoToLoginScreen(4, 'ne')} underlayColor={T.TRANSPARENT}>
                                      <Text style={[styles.inner_container, styles.customFont, {color:T.YELLOW}]} >{strings('languages.nepali')}</Text>
                              </TouchableHighlight>

                           </View>



                    </View>
            </ImageBackground>







      </View>

    );
  }
}

//                           { ToastAndroid.show(this.state.name, ToastAndroid.SHORT) }
