import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>FancyCard</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Sunset</Text>
            <Text style={styles.cardLabel}>Hinjewadi, Pune</Text>
            <Text style={styles.cardDescription}>
              Sunset in the Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature
              Reserve region is being designed to deliver protection and
              restoration of biodiversity across 95% of NEOM.
            </Text>
            <Text style={styles.cardFooter}>20min away</Text>
          </View>
        </View>
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
  card: {
    width: 360,
    height: 360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 10,
    shadowOffset: {
        width:1,
        height:1
    }
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
},
cardBody: {},
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 4
  },
  cardDescription: {
    color: '#000000',
    fontSize: 12,
     marginBottom: 4,
     marginTop: 6,
     flexShrink: 1
  },
  cardFooter: {
    color: '#000000',
  },
});
