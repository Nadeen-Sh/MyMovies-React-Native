import * as React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './CardStyle';

const Card = CardProps => {
  const {height, width, raduis, image, onClick, key, num} = CardProps;

  return (
    <View style={styles.cardStyle} key={key}>
      <TouchableOpacity onPress={onClick}>
        <Image
          source={{uri: image !== '' ? image : undefined}}
          style={{
            height: height,
            width: width,
            borderRadius: raduis,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.numberCard}>{num}</Text>
    </View>
  );
};

export default Card;
