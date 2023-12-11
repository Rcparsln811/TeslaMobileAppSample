import React from 'react';
import { View, Text , ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
  const {name, tagline: tagline, image, taglineCTA} = props.car;
  
  return (
    <View style={styles.carContainer}>
        <ImageBackground 
        source={image}
        style= {styles.image}
        />

        <View style={styles.titles}>

         <Text style={styles.title}>{name}</Text>
         <Text style={styles.subTitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          
          </Text>

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
