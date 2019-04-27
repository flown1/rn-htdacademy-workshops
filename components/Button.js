import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const Button = (props) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: props.color}]}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {
  color: '#0080FF'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 20
  },
  button: {
    backgroundColor: '#0090ff',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Button;
