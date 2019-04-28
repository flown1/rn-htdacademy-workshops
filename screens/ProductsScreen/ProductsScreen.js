import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class ProductsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Product</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
export default ProductsScreen;
