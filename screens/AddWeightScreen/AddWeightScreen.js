import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerAndroid,
  DatePickerIOS,
} from 'react-native';
import { Platform } from 'expo-core';

import Input from "../../components/Input";
import Button from "../../components/Button";

class AddWeightScreen extends Component {
  state = {
    weight: '90',
    date: new Date()
  };

  onChangeWeight = (weight) => {
    this.setState({weight: weight})
  };

  onChangeDate = (date) => {
    this.setState({date: date})
  };

  onPressButton = () => {
    console.log(this.state);
  };

  handleOpenDatePicker = () => {
    const { date } = this.state;
    DatePickerAndroid.open({
      date: date
    }).then(({aciton, year, month, day}) => {
      if (DatePickerAndroid.dismissedAction !== action) {
        const date = new Date(year, month, date);
        this.onChangeDate(date);
      }
    });
  };

  render() {
    const { weight, date } = this.state;
    const datePicker = Platform.OS === 'android'
      ? <Button
        onPress={this.handleOpenDatePicker}
        text="SET DATE"
      />
      : <DatePickerIOS
        style={styles.datePickerIOS}
        date={date}
        onDateChange={this.onChangeDate}
        mode="date"
      />;

    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Input
            onChangeText={this.onChangeWeight}
            label="Weight"
            keyboardType="numeric"
            value={weight}
            placeholder="Weight"
          />
          <Input
            label="Date"
            keyboardType="numeric"
            value={date.toLocaleDateString()}
            editable={false}
            placeholder="Date"
          />
          {datePicker}
          <Button
            onPress={this.onPressButton}
            text="SAVE"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#D7E8FF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 40
  },
  datePickerIOS: {
    width: '100%'
  }
});
export default AddWeightScreen;
