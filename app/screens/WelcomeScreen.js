import React, { Component } from 'react';
//import { Container, Header, Left, Body, Right, Title } from 'native-base';
import {View, StatusBar, Image, TouchableNativeFeedback, StyleSheet, TouchableHighlight,
 ImageBackground, Text, Button,
 ToastAndroid} from 'react-native';
//import {Accordionm, Button, Text} from 'native-base';
import styles from '../styles/GlobalStyles';
import {ListItem, Left, Right} from 'native-base';

const Constants = require('../styles/ColorConstants');
const T = Constants.COLOR;

import { strings, setLanguage } from '../utils/i18n';

export default class WelcomeScreen extends Component {


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

   pressWelcome = (page)=>{
        this.props.navigation.navigate('Dashboard');

   }

   changeName = data => {
        this.setState(data);
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
                           <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                               <Image style={{width: 180, height:180}}
                                 source={require('../../assets/images/logo_round.png')}
                               />
                           </View>

                            <View style={{ flex:1}}>
                                <Text style={{color:'white', textAlign:'center', fontSize:24,}}
                                onPress={() => this.pressWelcome()}>{strings('welcome')}</Text>
                            </View>


            <ListItem>
              <Left>
                <Text style={{color:'white'}}>{'(c)Ambica Trading Co'}</Text>
              </Left>
              <Right>
                  <Text  style={{color:'white'}}>{'V 1.23.456'}</Text>
              </Right>
            </ListItem>

                    </View>
            </ImageBackground>

      </View>

    );
  }
}

//                            <Button title='Next' onPress={null} style={{justifyContent:'bottom'}}> </Button>
