import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const ForgotPassword = ({navigation}) => {
    const [email,setemail]=useState("")
    const clearstates=()=>{
        
        setemail("")
       
      }
  return (
    <View style={styles.container}> 
      <View style={styles.signup}>
      <Text style={{fontSize:30,fontWeight:700}} >Forgot  password  </Text>
      </View>
      <View style={{marginVertical:10}}>
      <View  style={{marginVertical:10}}>
<Text>
    Please enter your email 
Address
</Text>
</View>

<View  style={styles.textinput}>
<Text> Email</Text>
<TextInput placeholder=''value={email} onChangeText={(text)=>setemail(text)}/>

</View>



    <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen",{userEmail:email},clearstates())}>
      <View  style={styles.button}>
        <Text style={styles.buttontitle}>Send</Text>
      </View>
    </TouchableOpacity>

      </View>
    </View>
  )
}

export default ForgotPassword

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