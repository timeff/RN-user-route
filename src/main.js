import React,{Component} from 'react'
import {Text
    ,View
    ,StyleSheet
} from 'react-native'

import SignIn from './components/authentication/signin'

export default class Main extends Component{
    render(){
        return (<View style={styles.container}>
            <SignIn />
        </View>)
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})