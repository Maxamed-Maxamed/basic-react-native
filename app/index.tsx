import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import beach from '@/assets/meditation-images/beach.webp'
const App = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <ImageBackground  source={beach} resizeMode="cover" className="flex-1"  > 

      <Text>App</Text>

      </ImageBackground>
     
    </View>
    
  )
}

export default App