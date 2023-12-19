import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


const HomeScreen = ({navigation}) => {
  const route= useRoute();
  const userName = route.params?.userName;
  const userEmail = route.params?.userEmail;
  const userPassword = route.params?.userPassword;
  return (
    <View style={{ flex:1,justifyContent:"center",}}>

 {userName==null ?null:    (<Text style={styles.centertext}>Name: {userName}
 </Text>)}
 {userEmail==null?null:(<Text style={styles.centertext}>Email:{userEmail}
 </Text>)}
 {userPassword==null?null:(<Text style={styles.centertext}>Password:{userPassword}
 </Text>)}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  centertext:{fontWeight:"500",
    fontSize:16,
   
    
  }
})