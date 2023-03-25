import React from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import Cat from './assets/cat.png';
import Flexbox from './Flexbox';

const CoreComponent = () => {
  return (
    <ScrollView
      style={
        {
          // flexDirection: 'row',
          // height: 100,
        }
      }
    >
      <View
        style={{
          padding: 20,
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Hello World!</Text>
        <Image source={Cat} style={{ width: 200, height: 200 }} />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="type here"
      />
      <Flexbox />
    </ScrollView>
  );
};

export default CoreComponent;
