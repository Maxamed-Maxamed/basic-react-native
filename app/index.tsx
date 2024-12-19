import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import beach from '@/assets/meditation-images/beach.webp'
const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground 
        source={beach}
        resizeMode="cover" 
        className="flex-1" 
      > 


      </ImageBackground>
      <Text>App</Text>
      <StatusBar style="auto" />
    </View>
    
  )
}

export default App