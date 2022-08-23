import * as React from 'react';
import { View, Text,TouchableOpacity,FlatList} from 'react-native';
import Estilos from '../Estilos';
import FireStore from '@react-native-firebase/firestore';

import {VictoryPie} from 'victory-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation,useRoute } from '@react-navigation/native';





export default function Financeiro(props){

    
    const [financeiroEntrada, setFinanceiroEntrada] = React.useState([]);
    const [financeiroSaida, setFinanceiroSaida] = React.useState([]);
    const [selectMes, setSelectMes] = React.useState();


    const teste = FireStore().collection('FinanceiroEntrada').doc
    console.log(selectMes)
       
    React.useEffect(() => {
      
    },[])



    React.useEffect(() => {
      const entrada = FireStore()
        .collection('FinanceiroEntrada')
        .onSnapshot(querySnapshot => {
          const vEntrada = [];
    
          querySnapshot.forEach(documentSnapshot => {
            vEntrada.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
    
          setFinanceiroEntrada(vEntrada);
          
          
        });
        
      return () => entrada();
    }, []);

    React.useEffect(() => {
      const saida = FireStore()
        .collection('FinanceiroSaida')
        .onSnapshot(querySnapshot => {
          const vSaida = [];
    
          querySnapshot.forEach(documentSnapshot => {
            vSaida.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
    
          setFinanceiroSaida(vSaida);
          
          
        });
        
      return () => saida();
    }, []);

       

    return(
      <View style={{flex:1}}>  
        <View style={{justifyContent: 'center',alignItems:'center',}}>
          <VictoryPie/>
        </View>
         <View>
         <Picker
            selectedValue={selectMes}
            onValueChange={(itemValue, itemIndex) =>
              setSelectMes(itemValue)}
              >
            <Picker.Item label="Janeiro" value="Janeiro" />
            <Picker.Item label="Fevereiro" value="Fevereiro" />
            <Picker.Item label="Março" value="Março" />
            <Picker.Item label="Abril" value="Abril" />
            <Picker.Item label="Maio" value="Maio" />
            <Picker.Item label="Junho" value="Junho" />
            <Picker.Item label="Julho" value="Julho" />
            <Picker.Item label="Agosto" value="Agosto" />
            <Picker.Item label="Setembro" value="Setembro" />
            <Picker.Item label="Outubro" value="Outrubro" />
            <Picker.Item label="Novembro" value="Novembro" />
            <Picker.Item label="Dezembro" value="Dezembro" />
          </Picker>
            <FlatList
            data={financeiroEntrada}
            renderItem= {({item})=><Config data={item}/>}

            />
         </View>
      </View>);
}

function Config({data}){
  const navigation = useNavigation();
  
  return(
    <TouchableOpacity style={{flex:1,backgroundColor: "cyan" ,height:50,width:'95%', borderWidth:1, borderColor:'#000', borderRadius:10, marginLeft:'2.5%', marginBottom: 1, justifyContent:'center',}} onPress={()=>navigation.navigate('InfoFinanceiro')}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize:20,paddingLeft:10}}>{data.mes}</Text>
            <Text style={{fontSize:20,paddingRight:10}}>{data.Entrada} R$</Text>
        </View>
    </TouchableOpacity>
)
}





