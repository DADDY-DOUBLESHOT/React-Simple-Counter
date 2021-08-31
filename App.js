import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';



export default function App()
{
  return(
    <View style={style.bodyMain}>
      <Counter/>
    </View>
   
  );
}

const style=StyleSheet.create(
  {
    bodyMain:
    {
      backgroundColor:'black',
      width:'100%',
      height:'100%'
    },
    Font:
    {
      color:'white',
      fontSize:32,
    }
  }
);
