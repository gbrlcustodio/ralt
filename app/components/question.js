import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Image,
} from 'react-native';

class Question extends Component {
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
        // remove width and height to override fixed static size
        width: null,
        height: null,
        alignItems: 'center'
      }}>
      <Image source={require('../res/drawable/logo-vertical.png')} style={{height:60,marginTop:20}}
      resizeMode='contain'/>
      </Image>
    );
  }
}

module.exports = Question
