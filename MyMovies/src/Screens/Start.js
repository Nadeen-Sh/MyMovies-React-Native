import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Start = () => {
  return (
    <View style={styles.Container}>
      <Image source={require('../assests/popcorn.png')} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(36, 42, 50, 1)',
  },
  img: {
    height: 150,
    width: 150,
  },
});

export default Start;
