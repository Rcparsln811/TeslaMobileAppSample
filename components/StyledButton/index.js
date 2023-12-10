import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const StyledButton = (props) => {
  return (
    <View style = {styles.container} >
      <Pressable
      style = {styles.button}
      onPress={()=>{
        console.warn('Naber')

      }}
      >
        <Text style = {styles.text}>Selam</Text>
        
      </Pressable>

      
    </View>
  )
}

export default StyledButton;