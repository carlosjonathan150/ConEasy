import * as React from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import Estilos from '../Estilos';
import Auth from '@react-native-firebase/auth';
import Header from '../componentes/Header';



export default function Home(props) {

  function sair() {
    Auth()
    .signOut();
  }

  function Perfil(){
    props.navigation.navigate('Perfil')
  }
  return (
    <View>
      <View>
        <Header tela="Home" Navegação= {Perfil}/>
      </View>
      <View style={{justifyContent: 'center', alignItems:'center',height:'80%'}}>
             
        <TouchableOpacity style={{alignItems:'center', margin:30}} onPress={()=> props.navigation.navigate('Moradores')}>
          <Image
          source={require('../../assets/img/Moradores.png')}
          style={{width:125,height:125}}
          />
          <Text style={{color: '#000',fontSize:20,fontWeight:'bold'}}>
            Moradores
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>props.navigation.navigate('Financeiro')}>
          
        <Image
          source={require('../../assets/img/Financeiro.png')}
          style={{width:125,height:125}}
          />
          <Text style={{color: '#000',fontSize:20,fontWeight:'bold'}}>
            Financeiro
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>props.navigation.navigate('CadFinanceiro')}>
          
        <Image
          source={require('../../assets/img/Financeiro.png')}
          style={{width:125,height:125}}
          />
          <Text style={{color: '#000',fontSize:20,fontWeight:'bold'}}>
            Financeiro
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}
    