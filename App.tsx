import React from 'react';
import { View, StyleSheet, StatusBar, } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';


export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
       
       <CarsList/>
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


