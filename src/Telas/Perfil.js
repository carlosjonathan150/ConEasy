import * as React from 'react';
import { View, Text,TouchableOpacity,FlatList,Image} from 'react-native';
import Estilos from '../Estilos';
import FireStore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';


export default function Perfil(props){

    const [users, setUsers] = React.useState([]);
    const user_id = Auth().currentUser.uid;

   React.useEffect(() => {
        const subscriber = FireStore()
          .collection('Moradores')
          .where("ID", "==",user_id)
          .onSnapshot(querySnapshot => {
            const usuario = [];
      
            querySnapshot.forEach(documentSnapshot => {
              usuario.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
      
            setUsers(usuario);
            
            
          });
          

        return () => subscriber();
      }, []);
      

    return(
        
        
        <View>
            <View style={Estilos.Header}>
            <TouchableOpacity onPress={()=>props.navigation.goBack('Home')}>
                <Image source={require('../../assets/img/Voltar.png')} style={{width:32, height:32, resizeMode:'contain'}}/>
            </TouchableOpacity>
            <Text style={{color: '#000', fontSize:22,fontWeight:'bold'}}>Perfil</Text>
            <TouchableOpacity onPress={props.Navegação}>
                <Image source={require('../../assets/img/Engrenagem.png')} style={{width:32, height:32}}/>
            </TouchableOpacity>
            
        </View>
            <FlatList
            data={users}
            renderItem= {({item})=> <Config data={item}/>}
            />
        </View>
    );

}

function Config({data}){
    
    return(
    
    <View style={{flex:1,alignItems:'center'}}>
        <View style={{height:'40%'}}>
            <TouchableOpacity>
                <Image
                source={{uri:data.Foto}}
                style={{width:200,height:200, borderRadius: 100 ,marginTop:30}}
                />
            </TouchableOpacity>
        </View>
        <View  style={{height:'60%' ,width:'100%',padding:10,marginTop:30}}>
            <Text style={Estilos.TextPerfil}>Nome: {data.Nome}</Text>
            <Text style={Estilos.TextPerfil}>Sobrenome: {data.Sobrenome}</Text>
            <Text style={Estilos.TextPerfil}>Telefone: {data.Telefone}</Text>
            <Text style={Estilos.TextPerfil}>Bloco: {data.Bloco}</Text>
            <Text style={Estilos.TextPerfil}>AP: {data.Ap}</Text>
        </View>
    </View>
    )
}