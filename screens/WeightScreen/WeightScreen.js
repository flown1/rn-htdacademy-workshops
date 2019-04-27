import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import WeightRow from "../../components/WeightRow";
import Input from "../../components/Input";
import Button from "../../components/Button";

class WeightScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BMI: '',
      weights: [
        {id: 1, value: 'asdad', date: '12.02.1999'},
        {id: 2, value: 'asdad2', date: '12.04.1999'},
        {id: 3, value: 'asdad3', date: '12.03.1999'}
      ]
    }
  }

  onChangeBMI = (value) => {
    this.setState({BMI: value});
    console.log(this.state.BMI);
  };

  onPressButton = () => {
    const { BMI } = this.state;
    console.log(BMI);
  };

  onRemoveItem = (id) => {
    console.log("removing" + id);
  };

  onEditItem = (id) => {
    console.log("editing" + id);
  };

  renderItem = ({ item }) => {
    return (
      <WeightRow
        value={item.value}
        date={item.date}
        onEditItem={() => this.onEditItem(item.id)}
        onRemoveItem={() => this.onRemoveItem(item.id)}
      />
    );
  };

  keyExtractor = (item) => {
    return `${item.id}`;
  };

  render() {
    const { BMI, weights } = this.state;
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>

          <Input
            onChangeText={this.onChangeBMI}
            label="BMI"
            keyboardType="numeric"
            value={BMI}
            placeholder="Placeholder"
          />
          <View style={styles.listContainer}>
            <FlatList
              data={weights}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              ListEmptyComponent={<Text>No items</Text>}
            />
          </View>
          <Button
            onPress={this.onPressButton}
            text="ADD WEIGHT"
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
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 40
  },
  listContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  }
});

export default WeightScreen;
