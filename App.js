import React from 'react';
import { View, Text,Button,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import NewLogin from './Screens/NewLogin';
import main from './Screens/main';
import wood from './Screens/wood';
import products from './Screens/products';
import decore from './Screens/decore';
import painting from './Screens/painting';
import sewing from './Screens/sewing';
import pottery from './Screens/pottery';
import bages from './Screens/bages';
import clothes from './Screens/clothes';
import footwear from './Screens/footwear';
import furniture from './Screens/furniture';


class Home extends React.Component {
  static navigationOptions={
    header:null
  }
  render() {
    return (
      <View style={styles.container}>  
     <View style={styles.form}>
     <Image 
                style={{width:200,height:200,borderRadius:100,marginTop:15}}
             source={require('./Screens/images/logs.jpg')}/>
     <TouchableOpacity onPress={() => this.props.navigation.navigate('NewLogin')}>
     <Text style={styles.login}>Login</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.signup}>Signup</Text>
          </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.guest}>Login as a Guest</Text>
          </TouchableOpacity>
   </View>
    </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: Home,
    products:products,
    main: main,
    NewLogin: NewLogin,
    Login: LoginScreen,
    Signup:SignupScreen, 
    SplashScreen: SplashScreen, 
    HomeScreen: HomeScreen,
    wood:wood,
    decore:decore,
    paint:painting,
    sew:sewing,
    pot:pottery,
    bag:bages,
    cloth:clothes,
    footwear:footwear,
    fun:furniture,
  },
  {
    initialRouteName: 'SplashScreen',
  }
);
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },
    form:{
    backgroundColor:'#fff',
    width:300,
    height:500,
    alignItems:'center',
    justifyContent:'center',
  },
  login:{
    backgroundColor:'#12132b',
    color:'#fff',
    fontSize:16,
    padding:5,
    paddingTop:8,
    width:300,
    fontWeight:'600',
    height:40,
    marginTop:30,
    textAlign:'center', 
},
  signup:{
    backgroundColor:'green',
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
    padding:5,
    paddingTop:8,
    width:300,
    height:40,
    marginTop:30,
    textAlign:'center',
  }, 
  guest:{
    backgroundColor:'gray',
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
    padding:5,
    paddingTop:8,
    width:300,
    height:40,
    marginTop:30,
    textAlign:'center',
  }, 
  logo:{
    width:200,
    height:200,
    borderRadius:100,
  },
 });