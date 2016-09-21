import React,{Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class Signup extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>You can sign up here!</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
})