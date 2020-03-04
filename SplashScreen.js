import React, { Component } from 'react'

import { Image,Text, navigator,StyleSheet, AppRegistry, View,TouchableOpacity} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import *as Animatable from 'react-native-animatable';
import { SplashScreen } from 'expo';

export default class App extends Component {
  static navigationOptions={
    header: null
  }
  
  render() {
    return (

     <View style={styles.container}>
        <View style={styles.logocontainer}>
             <Image 
             style={styles.logo}
             source={require('./images/logs.jpg')}/>
             <Text style={styles.title}>CRAFT MONGERS</Text>
             
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
          <Text style={ styles.getstart}>Get Started</Text>
          </TouchableOpacity>
         </View>
        
     </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    
  },
  logocontainer:{
    alignItems:'center',
    justifyContent:'center',
    width:400,
  },
  title:{
    color:'#000',
    marginTop:10,
    marginBottom:20,
    height:35,
    fontWeight:"600",
    marginBottom:40,
    fontSize:30,
    textAlign:"center",
  },
  touch:{
    justifyContent:"center",
    alignItems:"center",
  },
  logo:{
    width:200,
    height:200,
    borderRadius:100,
  },
  getstart:{
    backgroundColor:'#12132b',
    color:'#fff',
    marginTop:30,
    shadowColor:'#000',
    
    fontSize:20,
    
    padding:5,
    width:160,
    height:40,
    textAlign:'center',
  }
})