import React from "react";
import { Platform } from "react-native";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import WeightScreen from "../screens/WeightScreen/WeightScreen";
import ProductsScreen from "../screens/ProductsScreen/ProductsScreen";
import AddWeightScreen from "../screens/AddWeightScreen/AddWeightScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";


import { Ionicons } from "@expo/vector-icons";
const getPlatformIcon = Platform.OS === "ios" ? "ios-" : "md-";

const WeightStack = createStackNavigator({
  WeightScreen: {
    screen: WeightScreen,
    navigationOptions: {
      title: 'Weights',
      tabBarLabel: 'Weights'
    }
  },
  AddWeightScreen: {
    screen: AddWeightScreen,
    navigationOptions: props => {
      const { state } = props.navigation;
      if (state && state.params) {
        return {
          title: "Edit Weight",
        };
      }

      return {
        title: "Add Weight",
      };
    },
  },
});

const ProductsStack = createStackNavigator({
  ProductsStack: {
    screen: ProductsScreen,
    navigationOptions: {
      title: 'Product',
      tabBarLabel: 'Products'
    }
  }
});

const ProfileStack = createStackNavigator({
  ProfileStack: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      tabBarLabel: 'Profile'
    }
  }
});


ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      color={focused ? "lightblue" : "lightgrey"}
      size={25}
      name={getPlatformIcon + "person"}
    />
  ),
};

WeightStack.navigationOptions = {
  tabBarLabel: "Weight",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      color={focused ? "lightblue" : "lightgrey"}
      size={25}
      name={getPlatformIcon + "menu"}
    />
  ),
};

ProductsStack.navigationOptions = {
  tabBarLabel: "Products",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      color={focused ? "lightblue" : "lightgrey"}
      size={25}
      name={getPlatformIcon + "images"}
    />
  ),
};

export default createBottomTabNavigator({
  Weights: WeightStack,
  Profile: ProductsStack,
  Products: ProfileStack
});
