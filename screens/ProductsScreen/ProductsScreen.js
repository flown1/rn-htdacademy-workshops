import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

class ProductsScreen extends Component {
  state = {
    loading: false,
    products: []
  };

  componentDidMount() {
    const url = 'http://193.70.34.240/rnapi/api/v1/products';
    this.setState({loading: true});

    fetch(url).then(
      res => res.json()
      )
      .then(res => {
        console.log(res);
        this.setState({
          products: res,
          loading: false
        })
      })
  }

  render() {
    const { loading, products } = this.state;

    if (loading) return (<Text>Loading...</Text>);

    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item}) => <ProductItem item={item}/>}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const ProductItem = ({item}) =>
  <View style={styles.productContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text numberOfLines={3} >{item.description}</Text>
    </View>
    <Image style={styles.picture} source={{ uri: item.photo }} />
  </View>;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7E8FF',
    flex: 1
  },
  productContainer: {
    backgroundColor: "white",
    borderColor: "gray",
    flexDirection: "row",
    padding: 10,
    borderWidth: 0.2,
    height: 90
  },
  textContainer: {
    flex: 2
  },
  name: {
    fontWeight: "bold"
  },
  picture: {
    flex: 1
  }
});
export default ProductsScreen;
