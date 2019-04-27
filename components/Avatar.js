import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

const src = require('../assets/avatar.jpg');

class Avatar extends Component {
  render() {
    return (
      <View style={styles.avatarWrapper}>
        <Image source={src} style={{width: 100, height: 100, borderRadius: 50}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  avatarWrapper: {
    width: '100%',
    height: 100,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Avatar;
