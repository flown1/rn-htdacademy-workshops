import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerAndroid,
  DatePickerIOS, AsyncStorage,
} from 'react-native';
import { Platform } from 'expo-core';

import Input from "../../components/Input";
import Button from "../../components/Button";

class AddWeightScreen extends Component {
  constructor(props) {
    super(props);

    this.state = this.getDate(props);
  }

  saveNewWeights =  async (weight, date) => {
    const weights = this.props.navigation.getParam('weights', [])
    weights.push({
      id: new Date().valueOf(),
      value: weight,
      date,
    });

    const stringifiedWeights = JSON.stringify(weights);
    try {
      await AsyncStorage.setItem('root', stringifiedWeights);
      const updateWeightScreenFunction = this.props.navigation.getParam('update', () => {});
      updateWeightScreenFunction()
    } catch(err) {
      console.error('err', err)
    }
  };


  onChangeWeight = (weight) => {
    this.setState({weight: weight})
  };

  onChangeDate = (date) => {
    console.log('trigger:',date);
    this.setState({date})
  };

  onPressButton = () => {
    const { weight, date } = this.state;
    this.saveNewWeights(weight, date);

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

  getDate = (nextProps, prevState) => {
    const {state} = nextProps.navigation;
    if (state.params.date && state.params.weight) {
      console.log(state);
      const properDate = state.params.date;

      if (state && state.params) {
        return ({
          weight: state.params.weight,
          date: new Date(properDate) || new Date(),
        })
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  render() {
    const { weight, date } = this.state;
    console.log('body date:', date);
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
