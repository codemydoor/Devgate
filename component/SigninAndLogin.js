import React from 'react'
import {View,Text, Image, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import sign from "../assets/sign1.jpg"

function SigninAndLogin({navigation}) {
    return (
        <View>
            <Image  source={sign} style={styles.image} />
            <Text style={styles.notice1}>KEEP IN TOUCH WITH PEOPLE OF DEVGATE</Text>
            <Text style={styles.notice2}>Sign in or Register with your email</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("RegisterScreen")
                }} style={styles.register}>
                    <Text style={styles.registerText}>Register</Text>
                    <View style={styles.border}></View>
                    </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("SignInScreen")
                }}  style={styles.signIn}>
                    <Text style={styles.signInText}>Sign In</Text>
                    <View style={styles.border}></View>
                    </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

export default SigninAndLogin

const styles= StyleSheet.create({
    image:{
        height:430,
        width:375,
    },
    notice1:{
        marginVertical:20,
        alignSelf:"center",
        fontSize:17,
        fontWeight:"500"

    },
    notice2:{
        color:"gray",
        alignSelf:"center",
        fontSize:15,

    },
    buttonContainer:{
        flexDirection:"row",
        marginVertical:150,
       alignSelf:"center"
    },
    register:{
     marginRight: 80,
    
    },
    registerText:{
        fontSize:17,
        fontWeight:"500",
       
       
       },
    signInText:{
    fontSize:17,
    fontWeight:"500"
      
    },
    border:{
        height:2,
        width: 50,
        backgroundColor:'#F8B806'
    },
})
