import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../../api.js';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';



const HomeScreen = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl + '/mangas')
      .then(res => {
        setMangas(res.data.response);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
    <ScrollView>
        <View className='bg-gray-300 flex items-center '>
        {mangas.map(manga => (
            <View className='w-[70vw] h-[20vh] bg-white flex flex-row mt-6 rounded-xl justify-between items-center'>
                <View className=''>
                    <Text className='ml-3 text-lg w-24  font-bold'>{manga.title}</Text>
                    <TouchableOpacity>
                        <Text className='text-green-300 text-xl ml-3 font-bold'>Read</Text>
                    </TouchableOpacity>
                </View>
                
                <View>
                    <Image className='h-36 rounded-xl w-28' source={{uri:`${manga.cover_photo}`}}/>
                </View>

            </View> 
        ))}
        </View>
        
    </ScrollView>
     
    </>
  );
};

export default HomeScreen;