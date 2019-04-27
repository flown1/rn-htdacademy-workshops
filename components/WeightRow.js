import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

const WeightRow = (props) => {
  return (
    <View style={styles.weightRow}>
      <Text style={styles.weightValue}>{props.value}</Text>
      <Text style={styles.weightDate}>{props.date}</Text>
      <TouchableOpacity onPress={() => props.onEditItem(props.id)} style={styles.iconWrapper}>
        <Ionicons name="md-create" size={16} color="gray"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onRemoveItem(props.id)} style={[styles.iconWrapper, styles.closeIcon]}>
        <Ionicons name="md-close" size={16} color="gray"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%'
  },
  weightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  weightValue: {
    fontWeight: 'bold'
  },
  weightDate: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  iconWrapper: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeIcon: {
    marginLeft: 15
  }
});

export default WeightRow;
