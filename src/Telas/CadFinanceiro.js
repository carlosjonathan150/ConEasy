import * as React from 'react';
import { View, Text,TouchableOpacity,FlatList,Image,TextInput,Alert} from 'react-native';
import Estilos from '../Estilos';
import FireStore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';
import { useNavigation,useRoute } from '@react-navigation/native';


export default function InfoFinanceiro(props){
    
    const [entrada, setEntrada] = React.useState('');
    const [dia, setDia]= React.useState('');
    const [mes, setMes]= React.useState('');
    const [ano, setAno]= React.useState('');
    const [funcionario, setFuncionario]= React.useState('');
    const [descrição, setDescrição] = React.useState('');
    const [load, setLoad] = React.useState(false);
    const [bt, setBt]  = React.useState(false);
    
    function Resgistrar(){
        setLoad(true);
        setBt(true); 
        if (entrada == ''){
          alert('Valor Obrigatorio')
          setLoad(false)
          setBt(false) 
        }if (dia == ''){
          alert('Data Obrigatorio')
          setLoad(false)
          setBt(false)
        }
        if (mes == ''){
          alert('Data Obrigatorio')
          setLoad(false)
          setBt(false)
        }
        if (ano == ''){
          alert('Data Obrigatorio')
          setLoad(false)
          setBt(false)
        }if (funcionario == ''){
          alert('Funcionario Obrigatorio')
          setLoad(false)
          setBt(false) 
        }if (descrição == ''){
          alert('Uma Pequena Descrição e Obrigatorio')
          setLoad(false) 
          setBt(false)
        }else{
          FireStore()
          .collection('FinanceiroEntrada')
          .add({
            Entrada: entrada,
            dia:dia,
            mes: mes,
            ano: ano,
            Funcionario: funcionario,
            descrição: descrição,
           })
          .catch ((error)=> console.log(error))
          .then(()=> Alert.alert('','Registrado com Sucesso!'),setLoad(false),setAno(''),setMes(''),setDia(''),setFuncionario(''),setDescrição(''),setEntrada(''));
          
          
        };
      
       }
    
    return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            
            <TextInput placeholder='Digite o valor:' style={Estilos.input} value={entrada} onChangeText={setEntrada} keyboardType='numeric'/>
            
            <TextInput placeholder='Funcionario:' style={Estilos.input} onChangeText={setFuncionario} value={funcionario}/>
            <TextInput placeholder='Descrição' style={Estilos.input} multiline={true} onChangeText={setDescrição} value={descrição}/>
            
            <View style={{flexDirection: 'row'}}>
              <TextInput placeholder='dia:' style={Estilos.inputData} value={dia} onChangeText={setDia} keyboardType='numeric'/>
              <TextInput placeholder='Mes:' style={Estilos.inputData2} value={mes} onChangeText={setMes} />
              <TextInput placeholder='Ano:' style={Estilos.inputData} value={ano} onChangeText={setAno} keyboardType='numeric' />
            </View>
            
            <TouchableOpacity style={Estilos.btnCad} onPress={Resgistrar}>
                <Text style={{color:'#fff'}}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </View>
    )
}