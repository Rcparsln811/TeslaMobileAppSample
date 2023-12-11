import React from 'react';
import { View, Text , ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

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

        <View style={styles.buttonContainer}>
          <StyledButton 
           type = "primary" 
           content ={"custom order"} 
           onPress={()=>{
             console.warn("Custom Ordar was pressed")
          }} 
          />
          <StyledButton 
          type = "secondary" 
          content ={"existing inventory"} 
          onPress={()=>{
            console.warn("Existing Inventory was pressed")
          }} 
          />

        </View>
        
      </View>
  );
};

export default CarItem;
