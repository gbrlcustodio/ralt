import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View
} from 'react-native';

class Details extends Component {
  render() {
    return(
      <ParallaxScrollView
        backgroundColor="rgba(255,94,58,1)"
        contentBackgroundColor="rgba(255,42,104,1)"
        parallaxHeaderHeight={300}
        renderForeground={() => (
          <Image style={styles.image}
            resizeMode='cover'
            source={{uri: 'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg'}}>

            <Text style={{color: '#ffffff', fontSize: 28, fontFamily: 'Georgia', flex: 1, alignItems: 'flex-end'}}>
              Rick Roll City!
            </Text>
          </Image>
        )}>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({

  content: {

  },

  welcome_title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 30,
    marginBottom: 40,
  },
  image: {
    flex: 1,
    alignSelf:'stretch'
  }
})

module.exports = Details;
