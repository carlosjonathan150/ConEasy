import { View, Text ,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Login,Cadastro,Moradores,Financeiro, Perfil,Cadastro2,InforMoradores, InfoFinanceiro,CadFinanceiro,CadFinanceiroSaida} from './src/Telas/index';
import React,{useState,useEffect} from 'react';
import Auth,{FirebaseAuthTypes} from '@react-native-firebase/auth';
import Header from './src/componentes/Header';






const Stack = createNativeStackNavigator();

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user,setUser] = useState(null);

  useEffect (()=>{
    const unsubscriber = Auth().onAuthStateChanged((_user)=>{
      setUser(_user);
      if (initializing) setInitializing(false);
    });

    return unsubscriber;
  },[]);

  if (initializing){
    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <ActivityIndicator size={'large'} color={'#000'}/>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {user?<Stack.Screen name="Home" component={Home} options={{headerShown:false}} />:<Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>}
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} />
        <Stack.Screen name="Moradores" component={Moradores} /> 
        <Stack.Screen name="Financeiro" component={Financeiro} />
        <Stack.Screen name="Perfil" component={Perfil} options={{headerShown:false}}/>
        <Stack.Screen name="InforMoradores" component={InforMoradores} />
        <Stack.Screen name="InfoFinanceiro" component={InfoFinanceiro} />
        <Stack.Screen name="CadFinanceiro" component={CadFinanceiro} />
        <Stack.Screen name="CadFinanceiroSaida" component={CadFinanceiroSaida} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
