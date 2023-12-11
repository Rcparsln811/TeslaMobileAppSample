import React from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import CarItem from './components/CarItem';


export default function App() {

  return (
    <View style={styles.container}>
       <CarItem/>
       
       
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

});


