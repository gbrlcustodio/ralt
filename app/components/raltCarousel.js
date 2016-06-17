import React, { Component } from 'react';
// es6
import {
  Image,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';

import Carousel from "react-native-carousel-control";

import LinearGradient from 'react-native-linear-gradient';

var PAGES = 5;
var BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];
var IMAGE_URIS = [
  'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
  'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
  'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
  'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
  'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];

class RaltCarousel extends Component {
  render() {
    var pages = [];
    for (var i = 0; i < PAGES; i++) {
      var pageStyle = {
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        flex:1
      };
      pages.push(
        <View key={i} style={pageStyle} collapsable={false}>
          <Image
            style={styles.image}
            source={{uri: IMAGE_URIS[i % BGCOLOR.length]}}
            resizeMode={'cover'}>
            <Text style={styles.title}>Amarantha</Text>
            <Text style={styles.headline}>Bar e Restaurante</Text>
          </Image>
       </View>
      );
    }
    return (
      <LinearGradient colors={['rgba(255,94,58,1)', 'rgba(255,42,104,1)']} style={styles.container}>
          <Carousel style={styles.viewPager}>
            {pages}
          </Carousel>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  headline: {
    color: 'white',
    marginBottom: 20
  },
  image: {
    width: 300,
    height: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  viewPager: {
    marginTop: 100,
    width: 300,
    height: 400,
    alignSelf: 'center'
  },
  viewTest: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'black'
  }
})

module.exports = RaltCarousel;
