import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class Flexbox extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}> textInComponent </Text>

        {/* content */}
        <View>
          <Text style={styles.subTitle}>Flexbox Direction Row (Horizontal)</Text>
          <View style={styles.flexHorizontal}>
            <View style={styles.redBox} />
            <View style={styles.greenBox} />
            <View style={styles.blueBox} />
          </View>

          <Text style={styles.subTitle}>Flexbox Direction Column (Vertical)</Text>
          <View style={styles.flexVertical}>
            <View style={styles.redBox} />
            <View style={styles.greenBox} />
            <View style={styles.blueBox} />
          </View>
        </View>

        <Text style={styles.subTitle}>Flexdirection row justify content flex start</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection row justify content flex end</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection row justify content space around</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection row justify content space between</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection row justify content space evenly</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection row justify content center</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>

        <Text style={styles.subTitle}>Flexdirection column align item flex start</Text>
        <View style={{ justifyContent: 'flex-start', height: 150, borderWidth: 1 }}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection column align item flex end</Text>
        <View style={{ justifyContent: 'flex-end', height: 150, borderWidth: 1 }}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection column align item space around</Text>
        <View style={{ justifyContent: 'space-around', height: 150, borderWidth: 1 }}>
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection column align item space between</Text>
        <View
          style={{
            justifyContent: 'space-between',
            height: 150,
            borderWidth: 1,
          }}
        >
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection column align item space evenly</Text>
        <View
          style={{
            justifyContent: 'space-evenly',
            height: 150,
            borderWidth: 1,
          }}
        >
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
        <Text style={styles.subTitle}>Flexdirection column align item center</Text>
        <View
          style={{
            justifyContent: 'center',
            height: 150,
            borderWidth: 1,
          }}
        >
          <View style={styles.redBox} />
          <View style={styles.greenBox} />
          <View style={styles.blueBox} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    minHeight: '100%',
    color: '#000',
    gap: 10,
    marginBottom: 150,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0,1)',
  },
  subTitle: {
    fontSize: 14,
    color: '#000',
  },
  flexHorizontal: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  flexVertical: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    gap: 5,
  },
  redBox: {
    backgroundColor: 'red',
    height: 30,
    width: 30,
  },
  greenBox: {
    backgroundColor: 'green',
    height: 20,
    width: 30,
  },
  blueBox: {
    backgroundColor: 'blue',
    height: 30,
    width: 30,
  },
});
