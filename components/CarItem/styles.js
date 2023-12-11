import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 40, 
        fontWeight: 'bold',
        color: 'black',
    
      },
    
      carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    
      },
    
      subTitle: {
        fontSize: 16,
        color:'#5c5e62',
    
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    
      },
      
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },

      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
      },
      subtitleCTA:{
          textDecorationLine: 'underline',
      },


});

export default styles;