import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>FancyCard</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})