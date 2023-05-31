import React, { useRef, useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput, ScrollView, Button} from 'react-native';

const SignUp = () => {
    
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword]= useState('')
 
  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('photo:', photo);
    console.log('pass:' ,password);
  };

  return (
<ScrollView>

        
    <View style={styles.container}>

        <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        />
        <TextInput
        style={styles.input}
        placeholder="Photo"
        value={photo}
        onChangeText={text => setPhoto(text)}
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        />
      
      

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
</ScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
export default SignUp