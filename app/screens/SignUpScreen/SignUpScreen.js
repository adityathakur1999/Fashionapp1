import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

const SignUpScreen = ({ navigation }) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearstates = () => {
    setname('');
    setemail('');
    setpassword('');
    setNameError('');
    setEmailError('');
    setPasswordError('');
  };

  const handleSignUp = () => {
 
    if (!name || name.length <3) {
      setNameError('Name is too short');
      return;
    } else {
      setNameError('');
    }

 
    if (!email || !email.includes('@')) {
      setEmailError('Invalid email');
      return;
    } else {
      setEmailError('');
    }

 
    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    } else {
      setPasswordError('');
    }

    setNameError('');
    setEmailError('');
    setPasswordError('');

    navigation.navigate('HomeScreen', { userName: name, userEmail: email, userPassword: password }, clearstates());
  };

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.signup}>
          <Text style={{ fontSize: 30, fontWeight: 700 }}>Sign up </Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <View style={styles.textinput}>
            <Text> Name</Text>
            <TextInput placeholder='Enter your Name' value={name} onChangeText={(text) => setname(text)} />
            <Text style={{ color: 'red' }}>{nameError}</Text>
          </View>
          <View style={styles.textinput}>
            <Text> Email</Text>
            <TextInput placeholder='Enter your email ' value={email} onChangeText={(text) => setemail(text)} />
            <Text style={{ color: 'red' }}>{emailError}</Text>
          </View>
          <View style={styles.textinput}>
            <Text>Password</Text>
            <TextInput placeholder='Enter your password' secureTextEntry={true} value={password} onChangeText={(text) => setpassword(text)} />
            <Text style={{ color: 'red' }}>{passwordError}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <View style={{ margin: 6 }}>
              <Text style={{ textAlign: 'right' }}>
                Already have an Account{' '}
                <Image source={require('/Users/apple/Documents/AwesomeProject/android/app/src/assets/Vector.png')} />
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUp}>
            <View style={styles.button}>
              <Text style={styles.buttontitle}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container:{ 
backgroundColor:"#F9F9F9",flex:1
  },
  signup:{ 
    
  marginVertical:20,
  
    color:"red",
    justifyContent:"center"
 

  },
  textinput:{
    shadowOffset: {width: -2, height: 4}, 
    shadowColor: "#171717", 
    shadowOpacity: 0.03, 
    shadowRadius: 3, 
    marginVertical:4,
    padding:8,
    backgroundColor:"white",
    borderRadius:8,
    
   
    
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