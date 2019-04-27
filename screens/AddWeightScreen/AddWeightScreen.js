import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from "../../components/Input";
import Button from "../../components/Button";

class AddWeightScreen extends Component {
  state = {
    weight: '90',
    date: '01.04.2019'
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

  render() {
    const { weight, date } = this.state;
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Input
            onChangeText={this.onChangeWeight}
            label="Weight"
            keyboardType="numeric"
            value={weight}
            placeholder="Placeholder"
          />
          <Input
            onChangeText={this.onChangeDate}
            label="Date"
            keyboardType="numeric"
            value={date}
            placeholder="Placeholder"
          />
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
});
export default AddWeightScreen;
