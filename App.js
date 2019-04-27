import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
  render() {
    const { BMI } = this.state;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>{BMI}</Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>BMI</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeBMI}
            value={BMI}
          />
        </View>
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
  inputWrapper: {
    width: '100%'
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomWidth: 3,
    borderColor: '#0080ff',
    borderRadius: 3
  },
  label: {
    color: '#0080ff',
    fontWeight: 'bold'
  }
});
