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
        {id: 1, weight: '90', date: '12.08.2013'},
        {id: 2, weight: '64', date: '05.08.2012'},
        {id: 3, weight: '120', date: '15.08.2013'}
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
    this.props.navigation.navigate('AddWeightScreen', {test: 'testtest'})
  };

  onRemoveItem = (id) => {
    console.log("removing" + id);
  };

  onEditItem = (id, item) => {
    console.log("editing" + id);
    this.props.navigation.navigate('AddWeightScreen', item)

  };

  renderItem = ({ item }) => {
    return (
      <WeightRow
        value={item.weight}
        date={item.date}
        onEditItem={() => this.onEditItem(item.id, {weight: item.weight, date: item.date})}
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
