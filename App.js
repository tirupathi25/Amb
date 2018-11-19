import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import SelectLanguage from './app/screens/SelectLanguage';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
//import Dashboard from './react_app/Dashboard';
//import HeaderTransparent from './react_app/HeaderTransparent';
//import TabsHome from './react_app/TabsHome';


const mainNavigator = createStackNavigator({
//    Dashboard:{
//        screen:Dashboard,
//         navigationOptions:{
//                    header:null,
//                }
//      },



    SelectLanguage :{
        screen: SelectLanguage,
        navigationOptions:{
                header:null,
              }
    },

    LoginScreen: {
      screen: LoginScreen,
        navigationOptions:{
                  header:null,
              }
      },

      WelcomeScreen:{
        screen:WelcomeScreen,
        navigationOptions:{
            header:null
        }
      },

//
//
// TabsHome:{
//            screen: TabsHome,
//        },
//
//  HeaderTransparent:{
//        screen:HeaderTransparent,
//        navigationOptions:{
//            header:null,
//        }
//  }

});

export default mainNavigator;
