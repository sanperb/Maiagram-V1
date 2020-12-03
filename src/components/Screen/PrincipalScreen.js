import React, {Component}from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState} from 'react'

class PrincipalScreen extends Component{

  render(){
      return(
          <View style={styles.container}>
          <Text>Fotos Subidas</Text>
          </View>


      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'whitesmoke',
      alignItems:"center",
    },
    textoprueba:{
        justifyContent: 'center',
        alignContent:'center',
        textAlign:'center',
    }
  });

export default PrincipalScreen;