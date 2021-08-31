import React, { useState } from "react";
import { View,Text ,StyleSheet,TouchableOpacity,TouchableHighlight,TouchableNativeFeedback} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



const Counter=()=>
{
    const [status,newStatus]=useState("0");
    return(
        <View style={styles.bodyMain}>
            <View>
            <Text style={styles.FontColor}>SIMPLE COUNTER</Text>
            </View>
            <View style={styles.MainContent1}>
                <Text style={styles.MainContent2} >{status}</Text>
            </View>
            
            <View  >
                
                    <TouchableOpacity style={styles.btns} >
                        <Text  style={styles.bcolor}onPress={()=>{newStatus(Number(status)+1)}}>UP</Text>
                        <Text  style={styles.bcolor}onPress={()=>{newStatus((Number(status))==0?0:(Number(status)-1))}}>DOWN</Text>
                        <Text  style={styles.bcolor}onPress={()=>{newStatus(0)}}>RESET</Text>
                    </TouchableOpacity>
                
            </View>
           

           
        </View>
    );
}

const styles=StyleSheet.create(
    {
        bodyMain:
        {
        backgroundColor:'black',
        marginTop:30,
        margin:15,
        display:'flex',
        alignItems:'center',
        width:'100%',
        height:'100%'
        },
        FontColor:
        {
            color:'white',
            fontSize:32,
            backgroundColor:'black',
        },
        MainContent1:
        {
            alignItems:'center',
            margin:20,
            backgroundColor:'grey',
            display:'flex',
            width:150,
            height:150,
        },
        MainContent2:
        {
            fontSize:100,
            color:'white',
           
        },
        btns:
        {
            flex: 1,
            flexDirection: 'row',
           justifyContent:'space-around',
            marginTop: 5,
    
        },
        bcolor:
        {
            margin:30,
            borderRadius:15,
            borderWidth:0.9,
            borderColor:'white',
            height:50,
            backgroundColor:'purple',
            color:'white',
            fontSize:35,
        },
        
    }
);


export default Counter;