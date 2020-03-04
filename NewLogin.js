import React, { Component } from 'react';
import {View,StyleSheet,Button,Text,Image,TouchableOpacity,Alert,TextInput,KeyboardAvoidingView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class NewLogin extends React.Component{
    
  state={username:"", password:""}
  static navigationOptions={
    header: null
    
  }
  checkLogin(){
    const {username,password}=this.state
    console.warn(username,password)
    if(username=='admin' && password=='admin'){
      this.props.navigation.navigate('HomeScreen')
    }
     else{
      Alert.alert('Error','Username/Password mismatch',[{text:'Ok'}])
    }
  }
    render(){
        return(
            <KeyboardAvoidingView behavior="padding"style={styles.container}>
                <View style={styles.form}>
                  <Image 
                style={{width:120,height:120,borderRadius:100,marginTop:15}}
             source={require('./images/logs.jpg')}/>
             <View>
                 <Text style={styles.phm}>CRAFT MONGERS</Text>
             </View>
             <View behavior="padding" >
             <Text style={styles.text}>Username</Text>
             <TextInput style={styles.input}
             placeholder="Enter your name"
             onChangeText={text=>this.setState({username: text})}
             ></TextInput>
             
             <View style={styles.separator}></View>
            <Text style={styles.text}>Password</Text>
             <TextInput style={styles.input}
             placeholder="********"
             secureTextEntry
             onChangeText={text=>this.setState({password:text})}
             ></TextInput>
             <View style={styles.separator}></View>
            </View>
            <TouchableOpacity>
            <View style={styles.forget}>
                <Text>Forget Password?</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={_=>this.checkLogin()}>
          <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
          <View style={styles.newuser}>
              <Text style={{fontSize:16}}>New User?</Text>
              <TouchableOpacity>
                  <Text style={styles.signup}onPress={()=>this.props.navigation.navigate('Signup')}
                  >Signup</Text>
              </TouchableOpacity>
          </View>
           </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    form:{
        width:600,
        justifyContent:'center',
        alignItems:'center',
        height:'80%',
        backgroundColor:'#fff',
        alignItems:'center',
        marginLeft:20,
        marginRight:20,
    },
    input:{
        backgroundColor:'#fff',
        color:'#000',
        width:300,
        height:40,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        borderColor:'#fff',
    },
    separator:{
        width:300,
        height:2,
        backgroundColor:'#12132b',
    },
    forget:{
        width:300,
        height:40,
        alignItems:'flex-end',
        marginTop:15,
    },
    text:{
        fontSize:20,
        padding:5,
    },
    phm:{
        fontSize:25,
        padding:5,
    },
    login:{
        backgroundColor:'#12132b',
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        padding:5,
        paddingTop:8,
        width:300,
        height:40,
        
        textAlign:'center',
        
    },
    newuser:{
        flexDirection:'row',
        paddingTop:15,
    },
    signup:{
        color:'#04975B',
        fontWeight:'600',
        fontSize:16,
        marginLeft:5,
    }
})