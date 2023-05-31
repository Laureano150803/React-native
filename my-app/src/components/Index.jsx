import React, { useRef } from 'react';
import { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import SignIn from './SignIn';
const Index = () => {
  const [hide, setHide] = useState(false)
  function show() {
    setHide(!hide)
}
  return (
    <>
      <ScrollView>
      <ImageBackground source={require('../img/fondo2.jpg')} style={styles.backgroundImage} className='h-[104vh]' >
        <View className='flex items-center justify-center h-full'>
          <Text className ='text-white font-bold text-5xl text-center'>Welcome</Text>
          <Text className='text-white text-2xl mt-4'>Find the perfect manga for you</Text>
          <TouchableOpacity style={styles.buttonContainer} className='px-28 h-12 bg-[#F472B6] flex justify-center' 
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  buttonContainer:{
    borderRadius: 20,
    marginTop: 16,
    overflow: 'hidden',
  }
});

export default Index;