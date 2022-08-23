import * as React from 'react';
import { View, Text,TouchableOpacity,FlatList,Image,SafeAreaView,ActivityIndicator,TextInput } from 'react-native';
import Estilos from '../Estilos';
import FireStore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';


export default function ListadeMoradores (props) {
    
    const [users, setUsers] = React.useState([]);
    const [nome,setNome]= React.useState(''); 
    const [data, setData] = React.useState([]);
    

     
    React.useEffect(() => {
        const subscriber = FireStore()
          .collection('Moradores')
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

      React.useEffect(() => {
        const scriber = FireStore()
          .collection('Moradores')
          .onSnapshot(querySnapshot => {
            const usuarios = [];
      
            querySnapshot.forEach(documentSnapshot => {
              usuarios.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });
      
            setData(usuarios);
            
            
          });
          
        return () => scriber();
      }, []);

      

      React.useEffect (() => {
        if(nome === '') {
           setUsers(data);
        }else {
          setUsers(data.filter((item)=>item.Nome.toLowerCase().indexOf(nome.toLowerCase())>-1  || item.Sobrenome.toLowerCase().indexOf(nome.toLowerCase())>-1));  
        }
    },[nome])

    
    
    
    function Config({data}){

      const navigation = useNavigation()

      const click = ()=> {
        navigation.navigate('InforMoradores', {
          id: data.ID,
          nome: data.Nome,
          sobrenome: data.Sobrenome,
          telefone: data.Telefone,
          bloco: data.Bloco,
          ap: data.Ap,
          foto: data.Foto,

        })
      }
 
      return(
          <TouchableOpacity style={Estilos.containerList} onPress={click}>
              <Image source={{uri: data.Foto}} style={{width: 50, height: 50, borderRadius: 30}}/>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize:22,paddingLeft:10}}>{data.Nome}</Text>
                  <Text style={{fontSize:22,paddingLeft:10, marginLeft:-5}}>{data.Sobrenome}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize:12,paddingLeft:12, marginLeft:1}}>Bloco:{data.Bloco}</Text>
                  <Text style={{fontSize:12,paddingLeft:12,marginLeft:-4}}>AP: {data.Ap}</Text>
                </View>
              </View>
          </TouchableOpacity>
      );
  }
    

      return(
        <SafeAreaView>
            <TextInput style={Estilos.inputPesquisa} placeholder='Pesquisar Morador' value={nome} onChangeText={setNome} />
            <FlatList
            data={users}
            renderItem= {({item,index})=> <Config data={item}/>}
            />
            
        </SafeAreaView>
    );
}

