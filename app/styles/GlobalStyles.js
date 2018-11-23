import {StyleSheet} from 'react-native';
const Constants = require('./ColorConstants');
const T = Constants.COLOR;

export default StyleSheet.create({


     container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },

      view_center:{
        justifyContent:'center',
        alignItems:'center',
      },

        padding_20:{
                padding: 20,

              },

               textField:{
                        backgroundColor: T.GREEN,
                        justifyContent: 'center',
                        borderRadius:6,
                        marginBottom:5,
                        height:60,
                        alignSelf: 'stretch',
                        paddingHorizontal: 10,
                        marginLeft:2,
                        marginRight:2,
                  },



    button_style:{
        flex:1,
        borderBottomWidth :1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: 'white',

    },

     button_style_transparent:{
        flex:1,
        borderBottomWidth :.2,
        borderBottomColor: 'grey',

    },

    text_style:{
       fontSize:20,
       textAlign:'center',
       color:'white'
    },

     text_style_yel_28:{
           fontSize:28,
           textAlign:'center',
           color:T.YELLOW,
           fontWeight:'bold'
        },

         text_style_green_22:{
                   fontSize:22,
                   textAlign:'center',
                   color:T.GREEN,
                },

                text_style_green_20:{
                                   fontSize:20,
                                   textAlign:'center',
                                   color:T.GREEN,
                                },

    inner_container: {
        flex: 1,
        fontSize: 22,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    customFont: {
//       fontFamily: 'Cedarville-Cursive',
       // or fontFamily: 'Tittilium WebBold Italic'
    },

     loginButton: {
           backgroundColor: "black",
           justifyContent: 'center',
         },

      loginText: {
            color: 'white',
            fontSize: 20,
            alignItems:'center',
            justifyContent:'center',
            fontWeight:'bold'
          },

     button_enabled:{
         backgroundColor: T.YELLOW,
              justifyContent: 'center',
              alignItems:'center',
              borderRadius:6,
              margin:8,
              height:60,
              alignSelf: 'stretch',

      },

       sellerButton: {
            backgroundColor: T.YELLOW,
            justifyContent: 'center',
            alignItems:'center',
            borderRadius:6,
          },

            button_container: {
              marginBottom:5,
              height:60,
              alignSelf: 'stretch',
          },

            topMenu: {
              height: 52,
//              backgroundColor: '#f9a825',
              backgroundColor: '#fff',

            },

             card_style: {
                position: 'absolute',
                top: 80,
                left: 0,
              },

               box1: {
                  position: 'absolute',
                  top: 40,
                  left: 0,
                    width:'100%',
                    height:'50%',
                  backgroundColor: '#f9a825'
                },
                box2: {
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  width: '80%',
                  height: '60%',
                },

                 item: {
                        flex: 1,
                        height: 120,
                        margin: 10,
                        borderRadius: 5,
                    },


 footer:{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn:{
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
 btnText:{
        color: 'white',
        fontSize: 15,
    },
  seperator:{
        height: 0.5,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },



    //Styles of Regular Order Items below
    searchSectionParent:{
        backgroundColor:T.YELLOW,
        flex:1,
        width:'100%',
        padding:10
    },
    searchSection: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:T.YELLOW ,
        borderBottomColor:'#fff',
        borderBottomWidth:2,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 15,
    },
    searchIcon: {
        padding: 10,
        color:'#fff'
    },
    searchInputText: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 0,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: T.YELLOW,
        color: '#fff',
        fontSize:25,
        fontFamily:'Tittilium WebBold Italic',
    },

    flatListParent:{
      position: 'absolute',
      top: '20%',
      left: '5%',
      right:'5%',
      width: '90%',
      height: '80%',
      borderRadius:6,
      backgroundColor:T.YELLOW,
      flex:3,
    },
    flatListSection:{
        flex:1,
        width:'100%',
        backgroundColor:'#fff',
        borderRadius:6
    },
    flatListItem:{
        flex:1,
        height:100,
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:6,
    },
    regularOrderScreenParent:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },

    flatListProgress:{
      paddingVertical: 20,
      borderTopWidth: 1,
      borderColor: "#CED0CE"
    },


    // OrderEntryDetails View Styles
  imgView:{
      width: '100%',
      height: 200,
      marginTop: 44,
  },
  textStyle:{
      fontSize:30,
      fontFamily:'HelveticaNeue-Bold',
      textAlign:'left',
      color: 'white',
      marginLeft: 16,
      marginBottom: 15,
  },
  button1Style:{
      marginTop: 23,
      marginLeft: 15,
  },
  button2Style:{
      marginLeft: 218,
      marginTop: 20,
      
  },
  borderLine:{
      width : '100%',
      height: 1,
      backgroundColor:'gray',
  },
  addimagestyle:{
       justifyContent: 'center',
       alignItems: 'center',
       marginLeft:10,
       marginTop:13,
        width: '28%',
       height: 30,
       backgroundColor: '#FDC21D',
  },
  minusimagestyle:{
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
      marginTop:13,
      width: '28%',
      height: 30,
      backgroundColor: '#FDC21D',
  }

});
