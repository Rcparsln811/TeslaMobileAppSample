import React from 'react';
import { View, Text , ImageBackground } from 'react-native';
import styles from './styles';

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
        <ImageBackground 
        source={require('../../assets/images/ModelS.jpeg')}
        style= {styles.image}
        />

        <View style={styles.titles}>

         <Text style={styles.title}>Model S</Text>
         <Text style={styles.subTitle}>$74,420'den başlayan fiyatlarla</Text>

        </View>
      </View>
  );
};

export default CarItem;
