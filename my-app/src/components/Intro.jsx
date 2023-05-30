import React from 'react'
import {Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import apiUrl from '../../api';

const Intro = () => {
  
  
    useEffect(
      ()=>{
        axios(apiUrl+'/categories').then(res=>console.log(res.data.categories)).catch(err=>console.log(err))
      },[]
    )
      
    

  return (
    <>
    <View className='flex justify-center w-screen items-center h-screen'>
      <Text className='text-red-600'>Chaooo</Text>
   </View>
    </>
    
  )
}

export default Intro