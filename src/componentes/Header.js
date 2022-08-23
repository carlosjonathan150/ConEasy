import * as React from 'react';
import { View, Text,TouchableOpacity,Image,Alert } from 'react-native';
import Estilos from '../Estilos';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';


export default function Header(props){

    function sair(){
        auth().signOut().then(()=> Alert.alert('','Deslogado com Sucesso'))
    }
  
    return(
        <View style={Estilos.Header}>
            <TouchableOpacity onPress={sair}>
                <Image source={require('../../assets/img/Logout.png')} style={{width:29, height:29}}/>
            </TouchableOpacity>
            <Text style={{color: '#000', fontSize:22,fontWeight:'bold'}}>{props.tela}</Text>
            <TouchableOpacity onPress={props.Navegação}>
                <Image source={require('../../assets/img/User.png')} style={{width:35, height:35}}/>
            </TouchableOpacity>
            
        </View>
    );
}