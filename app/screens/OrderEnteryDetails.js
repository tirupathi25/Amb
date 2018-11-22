import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, Button ,ProgressBarAndroid, 
    FlatList,StatusBar,NativeModules} from 'react-native';
    
import IonIcon from '../components/Icon';
import { SearchBar } from 'react-native-elements';
import styles from '../styles/GlobalStyles';


export default class OrderEntryDetails extends Component{

    constructor(props){
        super(props);
    }

static detail = [{key:'one'},{key:'two'},{key:'three'},{key:'four'},{key:'five'},{key:'six'},{key:'seven'},{key:'eight'},{key:'nine'},{key:'ten'}];
    render(){
        return(

            <View>
                <View style={styles.imgView}>
                <ImageBackground source={require('../../assets/images/Symbol512.png')} style={{height: 200,width:'100%'}}>
                <View style={{flex : 2,flexDirection: 'row'}}>
                <TouchableOpacity style={styles.button1Style} onPress={() => this.goToDashBoard()}>
                    <Text style={{color:'white',fontSize: 18,fontFamily:'HelveticaNeue-Medium',}}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2Style}>
                    <Text style={{color:'white',fontSize: 18,fontFamily:'HelveticaNeue-Medium',}}>Confifrm</Text>
                </TouchableOpacity>
                </View>
                
                <Text style={styles.textStyle}>Order Entry Details </Text>
                <Text style={{fontSize:20, fontFamily:'HelveticaNeue-Bold', color: 'white',marginBottom: 10,marginLeft:16}}> Progress bar </Text>
        {/* <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={30}
        /> */}
        <TouchableOpacity onPress={() => this.moveToOrdersView()}>
        <SearchBar light
        containerStyle={{backgroundColor:"transparent", borderTopWidth:0, borderBottomWidth:0,marginBottom: 10}}
        // onChangeText={()=>console.log("Text Changed")}
        // onClearText={()=>console.log("Text Cleared")}
        icon={{ type: 'font-awesome', name: 'search' }}
        cancelButtonTitle="Cancel"
        placeholder='Search...'
        inputStyle={{ color: 'black',backgroundColor:'white'}}/>
        </TouchableOpacity>
                
                </ImageBackground>
                </View>
                <View >
                <FlatList style={{height: 500,}} data={[{key: 'one'}, {key: 'two'}, {key: 'three'}, {key: 'four'}, {key: 'five'}, {key: 'six'},
                {key: 'seven'}, {key: 'eight'}, {key: 'nine'}, {key: 'ten'}]} renderItem={({item}) => 
                <View>
            <View style={{flex : 4,flexDirection: 'row',height: 50}}>
            <Text style={{fontSize:16,fontFamily:'HelveticaNeue-Medium',marginTop: 10,width:'60%',marginLeft:5}}>1. Pillsbury Aata Pillsbury Aata</Text>
            <View style={{flex : 2,flexDirection: 'row',width:'15%'}}>
                <View style={styles.addimagestyle}>
                 <IonIcon name="add" color="white" size={35}/>
                 </View>
                 <View style={styles.minusimagestyle}>
                 <IonIcon name="remove" color="white" size={35}/>
                 </View>
            </View>
            <Image source={require('../../assets/images/close-128.png')} style={{height: 30,width:'10%',marginTop: 15}}/>
        <Text style={{fontSize:20,fontFamily:'HelveticaNeue-Medium',marginTop: 15}}> 24 </Text>
        </View>  
        <Text style={styles.borderLine}></Text>
        </View>
          }>  
            </FlatList>
            </View>
            </View>
        );
    }
    changeMethod(){
        
    }
    clearMethod(){

    }
    moveToOrdersView(){
        // console.log('this is moving')
        this.props.navigation.navigate('RegularOrderScreen', null );
    }
    goToDashBoard(){
        this.props.navigation.goBack();
    }
}

