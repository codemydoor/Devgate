import React from 'react'
import {Text, View, StyleSheet,TouchableOpacity, TextInput , ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


function RegisterScreen() {
    return (
        <View>
            <KeyboardAwareScrollView >
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                <AntDesign name="user" size={50} color="blue" />
                </View>
                <Text style={styles.profileText}>ADD PROFILE PHOTO</Text>
            </View>
            <View style={styles.formContainer}>
            <TextInput style={styles.inputFields}  placeholder='Full Name' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput style={styles.inputFields}  placeholder='Email' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput style={styles.inputFields}  placeholder='Phone Number' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput style={styles.inputFields}  placeholder='Roll' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput style={styles.inputFields}  placeholder='Twitter' textAlign='right' />
            <View style={styles.border}></View>
            <TextInput style={styles.inputFields}  placeholder='LinkedIn' textAlign='right' />
            <View style={styles.border}></View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>REGISTER</Text>
            </TouchableOpacity>
            </View>
                
            </KeyboardAwareScrollView>
        </View>  
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        height: 190,
        backgroundColor:"#E8E8E8"

        
    },
    profileContainer:{
        alignSelf:"center",
        marginTop:40
        
    },
    profileText:{
        marginVertical:10,
        alignSelf:"center",
        color:"blue",
        fontWeight:"bold"
    },
    inputFields:{
        fontSize:17,
        color:"gray",
        marginBottom:10,
        paddingRight:5,
        height: 40
    }, border:{
        width: 350,
        borderColor:"gray",
        borderWidth:1,
        alignSelf:"center"
    },
    btn:{
        backgroundColor:'#F8B806',
        height: 50,
        width: 340,
        alignSelf:"center",
        marginVertical:50,
        borderRadius:5
        
    },
    btnText:{
        alignSelf:"center",
        marginVertical:15,
        fontSize:17,
        fontWeight:"bold"

    }
})
