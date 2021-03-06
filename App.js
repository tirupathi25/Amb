import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import SelectLanguage from './app/screens/SelectLanguage';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Dashboard from './app/screens/Dashboard';
import RegularOrderScreen from './app/screens/RegularOrderScreen';
import OrderEntryDetails from './app/screens/OrderEnteryDetails';
//import HeaderTransparent from './react_app/HeaderTransparent';
//import TabsHome from './react_app/TabsHome';


const mainNavigator = createStackNavigator({


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


   
       Dashboard:{
          screen:Dashboard,
           navigationOptions:{
                      header:null,
                  }
        },


      OrderEntryDetail:{
                screen: OrderEntryDetails,
                navigationOptions:{
                  header: null,
                }
      },

      RegularOrderScreen:{
        screen:RegularOrderScreen,

      }

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
