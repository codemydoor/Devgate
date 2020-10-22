import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'


import logo1 from '../assets/logo1.png'

function LandingPage({navigation}) {
    return (
         <View>
             <View style={styles.companyTag}>
                 <Image style={styles.logo} source={logo1} />
                 <Text style={styles.companyName}>Devgate</Text>
             </View>
             <Text style={styles.description}>Contact Manager</Text>
             <TouchableOpacity onPress={()=>{
                 navigation.navigate('SigninAndLogin')
             }} style={styles.button}>
                 <Text>GET STARTED</Text>
                 <View style={styles.border}></View>
             </TouchableOpacity>
          
        </View>
    )
}

export default LandingPage

const styles = StyleSheet.create({
    companyTag:{
        flexDirection:'row',
        marginVertical: 250,
        alignSelf:'center',
    },
   logo:{
       height: 80,
       width:80
},
companyName:{
    fontSize:35,
    fontWeight:"bold",
    marginVertical:15
},
border:{
    height:3,
    width: 92,
    backgroundColor:'#F8B806'
},
button:{
    alignSelf:"center",
    marginVertical:40
},
description:{
    position:"absolute",
    top: 310,
    left:160,
    fontSize:15,
    fontWeight:"bold",
    color:"gray"
   
}
})