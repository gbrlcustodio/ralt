import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Button from 'react-native-button';

class Thanks extends Component {
  render() {
    return (
      <LinearGradient colors={['rgba(255,94,58,1)', 'rgba(255,42,104,1)']} style={styles.home}>
        <View style={{alignItems: 'center', paddingTop: 50}}>
          <Image source={require('../res/drawable/logo.png')}
           resizeMode='contain' style={{height: 100, marginBottom: 10}}/>

          <Text style={styles.thanks_title}>
            Obrigado!
          </Text>

          <Text style={styles.thanks_text}>
            Agora vou lhe sugerir algumas atrações
          </Text>

          <Button
           containerStyle={
             {
               borderWidth: 1,
               borderColor: 'white',
               borderRadius: 3,
               padding: 10,
               paddingLeft: 40,
               paddingRight: 40
             }
            }
           style={styles.thanks_button}
           onPress={() =>
             this.props.navigator.push({
               name: 'Recommendations',
               activity: 1
             })
           }>
            Partiu?
          </Button>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },

  thanks_title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 50,
    marginBottom: 40,
  },

  thanks_text: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 21.5,
    textAlign: 'center',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50
  },

  thanks_button: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'normal'
  }
})

module.exports = Thanks;
