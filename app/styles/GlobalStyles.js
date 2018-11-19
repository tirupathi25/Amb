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
                backgroundColor: 'red'
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

});
