import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView horizontal style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>My</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Name</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>is</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>Raaj</Text>
          </View>
          <View style={[styles.card, styles.cardElevated]}>
            <Text>😊😍</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    borderColor: 'black',
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#EF5354',
  },
});
