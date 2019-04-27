import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RadioButtons = (props) => {
  return (
    <View style={styles.buttonsWrapper}>
      <TouchableOpacity onPress={() => props.onPress("male")} style={styles.singleButtonWrapper}>
        <View style={{...styles.icon, backgroundColor: props.currentValue === "male" ? "#0080FF" : "#D7e8FF"}}/>
        <Text>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPress("female")} style={styles.singleButtonWrapper}>
        <View style={{...styles.icon, backgroundColor: props.currentValue === "female" ? "#0080FF": "#D7e8FF"}} />
        <Text>Female</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    alignSelf: 'flex-start',
    marginVertical: 20,
  },
  singleButtonWrapper: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 30,
    borderColor: '#0080FF',
    borderWidth: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default RadioButtons;
