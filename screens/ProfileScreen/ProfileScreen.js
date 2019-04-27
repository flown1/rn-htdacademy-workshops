import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from "../../components/Input";
import Button from "../../components/Button";

class ProfileScreen extends Component {
  state = {
    name: 'Wiktor',
    height: '180',
    birthDate: '01.01.1999'
  };

  onChangeName = (val) => {
    this.setState({name: val});
  };

  onChangeHeight = (val) => {
    this.setState({height: val});
  };

  onChangeBirthDate = (val) => {
    this.setState({birthDate: val});
  };

  onPressButton = () => {
    console.log(this.state);
  };
  render() {
    const { name, height, birthDate } = this.state;
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Input
            onChangeText={this.onChangeName}
            label="Name"
            value={name}
            placeholder="Name"
          />
          <Input
            onChangeText={this.onChangeHeight}
            label="Height"
            keyboardType="numeric"
            value={height}
            placeholder="Height"
          />
          <Input
            onChangeText={this.onChangeBirthDate}
            label="Birth date"
            keyboardType="numeric"
            value={birthDate}
            placeholder="Birth Date"
          />
          <Button
            onPress={this.onPressButton}
            text="Save"
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
export default ProfileScreen;
