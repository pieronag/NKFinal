import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
} from 'react-native';

const Header = () => {
  
  return (
      <View style={styles.header}>
        <Text style={styles.titulo}>Nutricionista Katherine</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#f1afbb',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 10,
    color: 'white',
    fontFamily: 'KGT'
  },
  imagen: {
    alignSelf:'flex-start',
    resizeMode: 'stretch',
    width: 50,
    height: 50,
    marginTop: -50,
    marginLeft: 20,
  },
})

export default Header