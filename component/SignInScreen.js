import React from 'react'
import {Text, View, StyleSheet,TouchableOpacity, TextInput, Image } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import sign from '../assets/sign.jpg'

function RegisterScreen() {
    return (
        <View>
            <KeyboardAwareScrollView >
            <Image source={sign} style={styles.image} />
            <View style={styles.formContainer}>
            <TextInput style={styles.inputFields}  placeholder='Email' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput style={styles.inputFields}  placeholder='Password' textAlign='right' />
            
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>SIGN IN</Text>
            </TouchableOpacity>
            </View>
                
            </KeyboardAwareScrollView>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
   
    image:{
        height:240,
        width:400,
    },
    formContainer:{
        marginVertical:30
    },
    inputFields:{
        fontSize:17,
        color:"black",
        marginVertical:10,
        paddingRight:5,
        height: 40
    }, border:{
        width: 350,
        borderColor:"gray",
        borderWidth:.3,
        alignSelf:"center"
    },
    btn:{
        backgroundColor:'#F8B806',
        height: 50,
        width: 340,
        alignSelf:"center",
        marginVertical:30,
        borderRadius:5
        
    },
    btnText:{
        alignSelf:"center",
        marginVertical:15,
        fontSize:17,
        fontWeight:"bold"

    }
})
