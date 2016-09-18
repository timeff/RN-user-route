import {View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
import React,{Component} from 'react'
import Button from '../../common/button'

export default class SignIn extends Component{
    state={
        username:'',
        password:''
    }
    render(){
        return (<View style={styles.container}>
            <Text>Sign In</Text>
            <Text style={styles.label}>Username:</Text>
            <TextInput style={styles.input} 
            onChangeText={username=>this.setState({username})}
            value={this.state.username}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput secureTextEntry={true} style={styles.input}
            onChangeText={password=>this.setState({password})}
            value={this.state.password}
            />
            <Button text='Login' onPress={()=>this.onPress()} />
        </View>)
    }
    onPress(){
        this.setState({
            password:''
        })
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        padding:4,
        height:40,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:5,
        margin:5,
        width:200,
        alignSelf:'center'
    },
    label:{
        fontSize:18
    }
})

