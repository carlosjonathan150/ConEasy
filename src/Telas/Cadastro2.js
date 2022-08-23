
import * as React from 'react';
import { View, Text,TextInput,TouchableOpacity, Alert, Image,KeyboardAvoidingView,ScrollView,ActivityIndicator} from 'react-native';
import Estilos from '../Estilos';
import Auth from '@react-native-firebase/auth';
import FireStore from '@react-native-firebase/firestore';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { TextInputMask } from 'react-native-masked-text';




export default function Cadastro(props) {
  

 const [nome,setNome] = React.useState('');
 const [sobrenome, setSobrenome] = React.useState('');
 const [bloco,setBloco] = React.useState('');
 const [ap, setAp] = React.useState('');
 const [image, setImage] = React.useState('https://cdn-icons-png.flaticon.com/512/1946/1946429.png');
 const [telefone, setTelefone] = React.useState('');
 const [load, setLoad] = React.useState(false);
 const [bt, setBt]  = React.useState(false);
 const user_id = Auth().currentUser.uid
 


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
  setLoad(true);
  setBt(true); 
  if (nome == ''){
    alert('Nome Obrigatorio')
    setLoad(false)
    setBt(false) 
  }if (sobrenome == ''){
    alert('Sobrenome Obrigatorio')
    setLoad(false)
    setBt(false)
  }if (telefone == ''){
    alert('Telefone Obrigatorio')
    setLoad(false)
    setBt(false) 
  }if (bloco == ''){
    alert('Bloco Obrigatorio')
    setLoad(false) 
    setBt(false)
  }if (ap == ''){
    alert('AP Obrigatorio')
    setLoad(false)
    setBt(false) 
  }else {
    FireStore()
    .collection('Moradores')
    .add({
      Nome: nome,
      Sobrenome: sobrenome,
      Bloco: bloco,
      Ap: ap,
      Foto: image,
      Telefone: telefone,
      ID: user_id,
     })
    .catch ((error)=> console.log(error))
    .then(()=> Alert.alert('','Conta Criada com Sucesso!'))
    .finally(()=> props.navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    }))
  }

 }
  
  return (
    
    
    <KeyboardAvoidingView style={Estilos.containerCad} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView style={{width:'100%',marginTop:'10%'}}>
            <TextInput style={Estilos.input} placeholder='Nome:' onChangeText={setNome} />
            <TextInput style={Estilos.input} placeholder='Sobrenome:' onChangeText={setSobrenome}/>
            
            
            
            <TextInputMask style={Estilos.input} placeholder='Telefone:' type={'cel-phone'} options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }} onChangeText={setTelefone} keyboardType='numeric'/>
          
          <View style={{flexDirection:'row'}}>
            <TextInput style={Estilos.inputBlocoAP} placeholder='Bloco:' onChangeText={setBloco} keyboardType= 'numeric'/>
            <TextInput style={Estilos.inputBlocoAP} placeholder='AP:' onChangeText={setAp} keyboardType= 'numeric'/>
          </View>
        
          <TouchableOpacity style={[Estilos.btnFoto]} onPress={()=> carregarImagem()} disabled={bt}>
            <Text style={{color:'#fff'}}> Adicionar Foto </Text>
          </TouchableOpacity>

           <Image source={{uri:image}} resizeMode='cover' style={{width: 250, height: 250, borderWidth:1, borderColor:'#000', marginTop:10, marginBottom: -28,marginLeft:'18%'}}/> 
          
          <TouchableOpacity style={Estilos.btnCad} onPress={criarNovaConta} load={load} disabled={bt}>
            {load?(<ActivityIndicator
            size="large"
            color="#fff"
            style={{position:'absolute'}}
            />):(<Text style={{color:'#fff'}}> Cadastrar </Text>)}
            
            
          </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
  );
}