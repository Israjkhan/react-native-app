import * as React from 'react';
import {View,StyleSheet,Button,Text,Image,TouchableOpacity,Alert,TextInput,KeyboardAvoidingView} from 'react-native';


export default class NewLogin extends React.Component{
    

    static navigationOptions={
      header: null
      }
    constructor(props){
        super(props)
        this.state={
           userName:'',
           userEmail:'',
           userPassword:'',
        }
    }
    userRegister = () => {
       // alert('ok');
       const {userName, userEmail, userPassword }= this.state;
       //Alert.alert('OK');
       fetch('http://localhost/react/insertuser.php',{
           method: 'POST',
           header:{
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               name: userName,
               email: userEmail,
               password: userPassword,
           })
       }).then((response) => response.json())
       .then((responseJson)=>{
           Alert.alert(responseJson);
       }).catch((error)=>{
        console.error(error);
       })
       

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
             <View  >
             <Text style={styles.text}>Username</Text>
             <TextInput style={styles.input}
             placeholder="Enter your name"
             onChangeText= {userNameValue => this.setState({userName: userNameValue})}
             ></TextInput>
             
             <View style={styles.separator}></View>
            <Text style={styles.text}>E-mail</Text>
             <TextInput style={styles.input}
             placeholder="Enter your e-mail"
             onChangeText={userEmailValue => this.setState({userEmail: userEmailValue})}
             ></TextInput>
             <View style={styles.separator}></View>
            </View>

            <View  >
             <Text style={styles.text}>Password</Text>
             <TextInput style={styles.input}
             placeholder="********"
             onChangeText={userPasswordValue => this.setState({userPassword: userPasswordValue})}
             secureTextEntry
             ></TextInput>
             
             <View style={styles.separator}></View>
            <Text style={styles.text}>Confirm Password</Text>
             <TextInput style={styles.input}
             placeholder="********"
             onChangeText={userPassword => this.setState({userPassword})}
             secureTextEntry
             ></TextInput>
             <View style={styles.separator}></View>
            </View>
            <TouchableOpacity
             onPress={this.userRegister}>
          <Text style={styles.login}>Singup</Text>
          </TouchableOpacity>
          <View style={styles.newuser}>
              <Text style={{fontSize:16}}>Already hace account?</Text>
              <TouchableOpacity>
                  <Text style={styles.signup} 
                  onPress={()=>this.props.navigation.navigate('NewLogin')}>Login</Text>
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
        justifyContent:'center',
        alignItems:'center',
        paddingTop:25,
        width:'80%',
        height:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
    },
    input:{
        backgroundColor:'#fff',
        color:'#000',
        width:300,
        height:35,
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
    text:{
        fontSize:18,
        padding:3,
    },
    phm:{
        fontSize:20,
        padding:5,
    },
    login:{
        backgroundColor:'#12132b',
        color:'#fff',
        fontSize:16,
        padding:5,
        paddingTop:8,
        width:300,
        height:40,
        marginTop:20,
        textAlign:'center',
        fontWeight:'600',
        
    },
    newuser:{
        flexDirection:'row',
        paddingTop:15,
    },
    signup:{
        color:'#04975B',
        fontSize:16,
        fontWeight:'600',
        marginLeft:5,
    }
})