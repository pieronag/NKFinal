import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Image,
  Button,
} from 'react-native';

import Header from './Header';

const Home = ({ navigation }) => {
    return (
        <View>
            <Header />
            <Image style={styles.imagen} source={require('../assets/img/logo.png')} />
            <Text style={styles.texto}>Agregar Fruta o Verdura</Text>
            <Button     
                onPress={() => {navigation.navigate('AgregarFruta')}}
                title="AGREGAR"
                color="#f1afbb"
                style={styles.boton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imagen: {
      alignSelf:'center',
      resizeMode: 'stretch',
      width: 150,
      height: 150,
      marginTop: 20,
    },
    boton: {
        flex:1,
        width: 50,
        alignSelf:'center',
        marginLeft:50,
        marginRight:50,
        width:50,
    },
    texto: {
        paddingTop:50,
        paddingBottom:10,
        fontFamily: 'Quicksand',
        fontSize: 20,
        textAlign: 'center',
    }
  })

export default Home;