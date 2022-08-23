import { StyleSheet} from 'react-native';

const Estilos = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
           
    },
    containerCad:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fff',
             
    },
    containerList:{
        flexDirection: 'row',
        width: '95%',
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor : '#444',
        paddingTop: 15,
        paddingBottom: 15
        
       
      },
      Header:{
        flexDirection: 'row',
        width: '100%',
        height: 55,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf:'flex-start',
        paddingRight:15,
        paddingLeft:15
      },
      TextPerfil:{
        fontSize:20,
        margin:10,
        borderWidth:1,
        borderColor:'#000',
        borderRadius:5,
        height: 45,
        justifyContent:'center',
        paddingTop:8,
        paddingLeft:15,
        fontWeight:'bold'
      },
      TextPerfil2:{
        fontSize:20,
        marginTop:10,
        borderWidth:1,
        borderColor:'#000',
        borderRadius:5,
        height: 45,
        justifyContent:'center',
        paddingTop:8,
        paddingLeft:15,
        fontWeight:'bold',
        width:'95%'
      },
    input:{
        borderWidth: 1 ,
        borderColor: '#000',
        width:'90%',
        height: 50,
        padding:10,
        borderRadius: 15,
        marginTop:'2%',
        alignSelf:'center'
        
    },
    inputData:{
        borderWidth: 1 ,
        borderColor: '#000',
        width:'20%',
        height: 50,
        padding:10,
        borderRadius: 15,
        marginTop:'2%',
        alignSelf:'center'
        
    },
    inputData2:{
        borderWidth: 1 ,
        borderColor: '#000',
        width:'45%',
        height: 50,
        padding:10,
        borderRadius: 15,
        marginTop:'2%',
        marginLeft: '2%',
        marginRight:'2%',
        alignSelf:'center'
        
    },
    inputPesquisa:{
        borderWidth: 1 ,
        borderColor: '#000',
        width:'95%',
        height: 40,
        padding:10,
        borderRadius: 15,
        marginTop:'2%',
        alignSelf:'center'
        
    },
    input2:{
        borderWidth: 1 ,
        borderColor: '#000',
        width:'90%',
        height: 50,
        padding:10,
        borderRadius: 15,
        marginTop:'2%',
        marginBottom: '5%',
        alignSelf:'center'
        
    },
    inputBlocoAP:{
        borderWidth: 1 ,
        borderColor: '#000',
        width:'42%',
        height: 50,
        padding:10,
        borderRadius: 15,
        marginTop:'2%',
        marginLeft: '5%',
        
        alignSelf:'center'
    },
    lbl:{
        width:'88%',
        alignSelf:'center',
        marginTop: 5
    },
    img:{
        backgroundColor:'#000',
        borderRadius:150,
        width: 150,
        height: 150,
        marginTop: '1%'
        

    },
    btn:{
        borderWidth:1,
        borderBottomColor:'#000',
        width: '90%',
        height:50,
        borderRadius: 30,
        marginTop: '1%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    btnCad:{
        borderWidth:1,
        borderBottomColor:'#000',
        width: '90%',
        height:50,
        borderRadius: 30,
        marginTop: '10%',
        marginLeft: '2%',
        marginRight:'2%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    btnCancelarCad:{
        borderWidth:1,
        borderBottomColor:'#000',
        width: '90%',
        height:50,
        borderRadius: 30,
        marginTop: '2%',
        marginLeft: '2%',
        marginRight:'2%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    btnFoto:{
        borderWidth:1,
        borderBottomColor:'#000',
        width: '85%',
        height:45,
        borderRadius: 5,
        marginTop: '3%',
        marginLeft: '2%',
        marginRight:'2%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
})

export default Estilos;