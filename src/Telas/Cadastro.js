
import * as React from 'react';
import { View, Text,TextInput,TouchableOpacity,ActivityIndicator, Alert, Image,KeyboardAvoidingView,} from 'react-native';
import Estilos from '../Estilos/';
import Auth from '@react-native-firebase/auth';
import FireStore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



export default function Cadastro(props) {


 

 const [email,setEmail] = React.useState('');
 const [senha, setSenha] = React.useState('');
 const [load, setLoad] = React.useState(false);
 const [bt, setBt]  = React.useState(false);
 


  const carregarImagem = ()=> {
    Alert.alert("Selecione:", "Informe a origem da foto",[
      {
        text: "Galeria",
        onPress: () => pickImageFromGalery(), 
        style: "default"
      },
    ],
    {
      cancelable: true,
      onDismiss: ()=> console.log ('tratar depois')
    }
    )
  }

  const pickImageFromGalery= async()=> {

    const options=()=> {
      mediaType: 'photo'
    }

    const result = await launchImageLibrary(options);
    if (result?.assets) {
      setImage(result.assets[0].uri)
      return
    }
    

  }

  
  function criarNovaConta(){
  setLoad(true)
  setBt(true)
  if (email == ''){
    alert('Email Obrigatorio')
    setLoad(false)
    setBt(false) 
  }if (senha == ''){
    alert('Senha Obrigatorio')
    setLoad(false)
    setBt(false) 
  }else{
    Auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(()=>{setLoad(false);setBt(false)})
    .catch ((error)=> console.log(error))
    .finally(()=> {props.navigation.navigate('Cadastro2');setBt(false) });
  }

  
 }
  
  return (
    
    
    <View style={Estilos.containerCad}>
         
          
          <TextInput style={Estilos.input} placeholder='Email:' onChangeText={setEmail} autoCapitalize='none'/>
          <TextInput style={Estilos.input} placeholder='Senha:' onChangeText={setSenha} secureTextEntry={true}/>
          
          <TouchableOpacity style={Estilos.btnCad} onPress={criarNovaConta} load={load} disabled={bt}>
            {load?(<ActivityIndicator
            size="large"
            color="#fff"
            style={{position:'absolute'}}
            />):(<Text style={{color:'#fff'}}> Proximo </Text>)}
            
          </TouchableOpacity>

    </View>
  );
}