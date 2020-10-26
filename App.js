import React,{useEffect} from 'react';
import { StyleSheet} from 'react-native';
import Navigation from './Route/Navigation';
import {firebase} from './firebase/firebase'

export default function App({}) {
  // useEffect(() => {
  //   const subscriber = firebase.auth()
  //   return subscriber; // unsubscribe on unmount
  // }, []);
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
