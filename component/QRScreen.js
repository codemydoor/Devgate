import React ,{Component}from 'react'
'use strict';

import QRCode from 'react-native-qrcode-svg';


import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';
 
export default class QRScreen extends Component {
  state = {
    name: 'devcom/@',
    number:"",
    email:"",
  };
 
  render() {
    return (
      <View style={styles.container}>
          <View style={{marginBottom:150}}>
          <Text style={styles.text}>Key in your ID number to generate the QRCode </Text>
        <TextInput
        
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
       <View style={{alignSelf:"center"}}>
       <QRCode
          value={this.state.text.length > 0 ? this.state.text : "devgate"}
          size={200}
          bgColor='#000000'
          fgColor='#FFFFFF'/>

       </View>
          </View>
        
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
        width:200,
        alignSelf:"center"
    },
    text:{
        fontWeight:"bold",
        paddingHorizontal:80

    }
});
 
AppRegistry.registerComponent('QRScreen', () => QRScreen);
 
module.exports = QRScreen;