/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Welcome from './components/welcome';
import Question from './components/question';
import Thanks from './components/thanks';
import RaltCarousel from './components/raltCarousel';
import Details from './components/raltDetail'

import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';


class Ralt extends Component {
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{ name: 'Welcome' }}
        renderScene={ this.renderScene }
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}/>
    );
  }

  renderScene(route, navigator) {
    if(route.name === 'Welcome') {
      return <Welcome navigator={navigator}/>
    } else if(route.name === 'Question') {
      return <Question number={route.question} navigator={navigator}/>
    } else if (route.name==='Thanks') {
      return <Thanks navigator={navigator}/>
    } else if(route.name === 'Recommendations') {
      return <RaltCarousel navigator={navigator}/>
    }
  }
}

AppRegistry.registerComponent('Ralt', () => Ralt);
