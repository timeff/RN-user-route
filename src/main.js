import React,{Component} from 'react'
import {Navigator
    ,StyleSheet
} from 'react-native'

import Signin from './components/authentication/signin'
import Signup from './components/authentication/signup'

var ROUTES = {
    signin:Signin,
    signup:Signup
}

export default class Main extends Component{
    renderScene(route,navigator){
        var Component = ROUTES[route.name] // ROUTE['signin']
        return <Component route={route} navigator={navigator}/>
    }
    render(){
        return (<Navigator 
            style={styles.container}
            initialRoute={{name:'signin'}} 
            renderScene={this.renderScene} 
            configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}} 
        />)
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1
    }
})