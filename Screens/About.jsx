import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const About = () => {
  const storeData = async ()=>{
       let obj={
        name: "Anfaal Abdul Hai",
        email: "anfaalabdulhai@gmail.com",
        city: "Karachi",
       }
       await AsyncStorage.setItem('userObj', JSON.stringify(obj));
  }
  const getData = async ()=>{
  
    const data = await AsyncStorage.getItem('userObj');
    console.log("get Data: ",data)
}
const removeData = async ()=>{
  
  await AsyncStorage.removeItem('userObj');
}
const getKeys = async ()=>{
  
  const getallkeys = await AsyncStorage.getAllKeys();
  console.log("get Keys: ",getallkeys)
}
  return (
    <View>
      <Text>About</Text>
       <View style={styles.container}>
       <TouchableOpacity style={styles.button} onPress={storeData}>
         <Text style={{color: 'white'}}>Store Data</Text>
       </TouchableOpacity>
       </View>
       <View style={styles.container}>
       <TouchableOpacity style={styles.button} onPress={getData}>
         <Text style={{color: 'white'}}>get Data</Text>
       </TouchableOpacity>
       </View>
       <View style={styles.container}>
       <TouchableOpacity style={styles.button} onPress={removeData}>
         <Text style={{color: 'white'}}>Remove Data</Text>
       </TouchableOpacity>
       </View>
       <View style={styles.container}>
       <TouchableOpacity style={styles.button} onPress={getKeys}>
         <Text style={{color: 'white'}}>Get Keys</Text>
       </TouchableOpacity>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    flex: 1,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#BB8BD9',
    padding: 10,
    margin: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default About

