import React, { Component } from 'react';
import Button from 'react-native-button';

import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class Question extends Component {
  nextScreen(){
    var next = this.props.number == 4 ? 'Thanks' : 'Question';
    this.props.navigator.push({
      name: next,
      question: this.props.number + 1
    });
  }
  render() {
    switch (this.props.number) {
      case 1:
        var imageBg = require('../res/drawable/a1.jpg');
        break;
      case 2:
        var imageBg = require('../res/drawable/a2.jpg');
        break;
      case 3:
        var imageBg = require('../res/drawable/a3.jpg');
        break;
      case 4:
        var imageBg = require('../res/drawable/a4.jpg');
        break;
    }

    return (
      <Image source={imageBg} style={{
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center'
      }}>
        <Image source={require('../res/drawable/logo-vertical.png')} style={{height:60,marginTop:20}}
          resizeMode='contain'/>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'flex-end', marginBottom: 30}}>
          <Button
            containerStyle={
              {
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 3,
                marginRight: 30,
                padding: 10,
                paddingRight: 35,
                paddingLeft: 35,
              }
            } style={{color: 'white'}}
            onPress={() =>
              this.nextScreen()
            }>Nop</Button>

          <Button
            containerStyle={
              {
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 3,
                padding: 10,
                paddingRight: 35,
                paddingLeft: 35,
                backgroundColor: "white"
              }
            } style={{color: '#333'}}

            onPress={() =>
              this.nextScreen()
            }>Yep</Button>
        </View>
      </Image>
    );
  }
}

module.exports = Question
