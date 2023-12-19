import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearStates = () => {
    setemail('');
    setpassword('');
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
   
    if (!email || !email.includes('@')) {
      setEmailError('Invalid email');
      return;
    } else{setEmailError('')}

  
    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    } else{setPasswordError('')}

   
    navigation.navigate('HomeScreen', { userEmail: email, userPassword: password }, clearStates());
  };

  return (
    <View style={styles.container}>
      <View style={styles.signup}>
        <Text style={{ fontSize: 30, fontWeight: 700 }}>Login</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <View style={styles.textinput}>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setemail(text)}
          />
          <Text style={{ color: 'red' }}>{emailError}</Text>
        </View>
        <View style={styles.textinput}>
          <Text>Password</Text>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setpassword(text)}
          />
          <Text style={{ color: 'red' }}>{passwordError}</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <View style={{ margin: 6 }}>
            <Text style={{ textAlign: 'right' }}>
              Forgot your password?
              <Image
                source={require('/Users/apple/Documents/AwesomeProject/android/app/src/assets/Vector.png')}
              />
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttontitle}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;






const styles = StyleSheet.create({
  container:{ marginHorizontal:10, marginVertical:8,

  },
  signup:{ 
    
  marginVertical:20,
  
    color:"red",
    justifyContent:"center"
 

  },
  textinput:{
    
    marginVertical:4,
    padding:8,
    backgroundColor:"white",
    marginVertical:5
,    

  },
  button:{
    backgroundColor:"red",
    padding:15,
    marginVertical:20,
    borderRadius:20
    
    
  },
  buttontitle:{fontWeight:"600",
    textAlign:'center',color:"#FFF",

  },
})