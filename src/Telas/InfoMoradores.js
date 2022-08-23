import * as React from 'react';
import { View, Text,TouchableOpacity,FlatList,Image} from 'react-native';
import Estilos from '../Estilos';
import FireStore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';
import { useNavigation,useRoute } from '@react-navigation/native';


export default function Perfil(props){

  const navigation = useNavigation();
  const route = useRoute();

  const [infor, setInfor]= React.useState({
    id: route.params.id,
    nome: route.params.nome,
    sobrenome: route.params.sobrenome,
    telefone: route.params.telefone,
    bloco: route.params.bloco,
    ap: route.params.ap,
    foto: route.params.foto,
  });

        

    return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'center',}}>
            
            <Image
            source={{uri:infor.foto}}
            style={{width: 200,height: 200, borderRadius:100, marginBottom:50,marginTop:-50}}
            />
            
            <Text style={Estilos.TextPerfil2}>Nome: {infor.nome}</Text>
            <Text style={Estilos.TextPerfil2}>Sobrenome: {infor.sobrenome}</Text>
            <Text style={Estilos.TextPerfil2}>Tel: {infor.telefone}</Text>
            <Text style={Estilos.TextPerfil2}>Bloco: {infor.bloco}</Text>
            <Text style={Estilos.TextPerfil2}>Ap: {infor.ap}</Text>

        </View>
    );

}
