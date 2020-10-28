import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import qrcode from '../assets/qrcode.png'



function HomeScreen({navigation}) {
    
    return (
        <View>
            
            <View style={styles.textContainer}>
              <Text style={{fontSize:16, marginBottom:10}}>Exchange contact information</Text>
              <Text style={{color:"gray", fontSize:16}}>Scan this QR bellow to share your contact</Text>
            </View>
            <View style={styles.qrCodeContainer}>
                <Image source={qrcode} style={styles.qrCode}/>

            </View>
            <View style={styles.bottomTextContainer}>
                <View style={styles.btntextContainer}>
                <Text style={{marginTop:5}}>Wants to add a connection?</Text>
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate("CameraScreen")

                }}
                 style={styles.btn} >
                    <Text style={{alignSelf:"center", marginTop:5, color:"blue"}}>Scan QR</Text>
               </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    textContainer:{
        marginVertical:40,
        paddingHorizontal:40
    },
    qrCodeContainer:{
        alignSelf:"center",
        marginVertical:30

    },
    qrCode:{
        height: 200,
        width:200
    },
    bottomTextContainer:{
        marginVertical: 100,
        paddingHorizontal:40,
        marginVertical:200,
        borderTopColor:"gray",
        borderTopWidth:0.7

    },
    btn:{
        height:30,
        width: 80,
        borderWidth:2,
        borderColor:"blue",
        borderRadius:3,
        marginHorizontal:10,
       
    },
    btntextContainer:{
       flexDirection:'row',
       marginVertical:15
    }
})
