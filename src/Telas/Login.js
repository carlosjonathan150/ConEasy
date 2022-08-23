import * as React from 'react';
import { View, Text, StyleSheet, Image,TextInput,TouchableOpacity,SafeAreaView, Alert,ActivityIndicator  } from 'react-native';
import Estilos from '../Estilos/';
import Auth from '@react-native-firebase/auth';


export default function Login(props) {
  
  const [email, setEmail] = React.useState('email');
  const [senha, setSenha] = React.useState('senha');
  const [load, setLoad] = React.useState(false);
  const [bt, setBt] = React.useState(false);


    
  
    function logar(){
      
      setLoad(true);
      setBt(true);
      Auth()
      .signInWithEmailAndPassword(email, senha)
      .then(()=> Alert.alert('Bem-Vindo'))
      .catch((error)=> {setLoad(false);setBt(false); alert('Email ou Senha Incorretos')} )
      .finally(()=> {setLoad(false);setBt(false)})
      
    }   

  
 
  
  

  
  
  return (
    
    <SafeAreaView  style={Estilos.container}>
    
      <View style={{flex:0.4,justifyContent:'center'}}>
        
        <Image source={require('../../assets/img/logo2easyweb.png')} style={Estilos.img}/>
        </View>
        <View style={{flex:0.6, width:'100%'}}>
          <Text style={Estilos.lbl}>Email:</Text>
          <TextInput style={Estilos.input} onChangeText={setEmail} autoCapitalize='none'/>
          <Text style={Estilos.lbl}>Senha:</Text>
          <TextInput style={Estilos.input2} secureTextEntry={true} onChangeText={setSenha}/>
          
          
          <TouchableOpacity style={Estilos.btn} onPress={logar} load={load} disabled={bt} >
          {load?(<ActivityIndicator
            size="large"
            color="#fff"
            style={{position:'absolute'}}
            />): (<Text style={{color: '#fff',}}>
            Entrar
          </Text>)}
          </TouchableOpacity>
          <TouchableOpacity style={Estilos.btn} onPress={()=>props.navigation.navigate('Cadastro')}>
            <Text style={{color: '#fff',}}>
              Cadastrar
            </Text>
          </TouchableOpacity>
          
        </View>  
    </SafeAreaView >
  );
}