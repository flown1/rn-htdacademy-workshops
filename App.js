import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Input from "./components/Input";
import Button from "./components/Button";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BMI: ''
    };
  }

  onChangeBMI = (value) => {
    this.setState({BMI: value});
  };

  onPressButton = () => {
    const { BMI } = this.state;
    console.log(BMI);
  };
  render() {
    const { BMI } = this.state;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>{BMI}</Text>

        <Input
          onChangeText={this.onChangeBMI}
          label="BMI"
          keyboardType="numeric"
          value={this.state.BMI}
          placeholder="Placeholder"
        />
        <Button
          onPress={this.onPressButton}
          text="ADD WEIGHT"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  },
});
