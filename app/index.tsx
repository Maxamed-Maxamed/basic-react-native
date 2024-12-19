import { ImageBackground, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import beachImg from '@/assets/meditation-images/beach.webp'
import { LinearGradient } from 'expo-linear-gradient'

const App = () => {
  return (
    <View className='flex-1'>
      <ImageBackground source={beachImg} resizeMode="cover" className="flex-1">
        <LinearGradient className='flex-1' colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <SafeAreaView className='text-center text-white font-bold text-4xl '>
          <Text>App</Text>

          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default App