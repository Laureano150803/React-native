import React, { useRef } from 'react';
import { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './SignIn';



const Index = () => {
  const [hide, setHide] = useState(false)
  function show() {
    setHide(!hide)
}
const navigation = useNavigation()
  return (
    <>
    
      <ScrollView>
      <ImageBackground source={require('../img/fondo3.jpg')} className='h-[103.5vh] bg-contain' >
        <View className='flex items-center justify-center h-full'>
          <Text className ='text-white font-bold text-5xl text-center'>Welcome</Text>
          <Text className='text-white text-2xl mt-4 text-center'>Enjoy the best reading and unlimited adventures. Let's explore!</Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonContainer} 
          className='px-28 h-12 bg-[#ef2626d3] flex justify-center' 

          >
            <Text className='text-white text-xl font-bold'>Explore</Text>
          </TouchableOpacity>

          <TouchableOpacity className='flex items-center'
          onPress={show}
          >
            <Text className='text-white text-2xl mt-6'>SingIn</Text>
           
          </TouchableOpacity>
         
        </View>
        
        
      </ImageBackground>
      </ScrollView>
      
      {hide && (<SignIn/>)}
      
  
    
     
    
    
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer:{
    borderRadius: 20,
    marginTop: 16,
    overflow: 'hidden',
  }
});

export default Index;