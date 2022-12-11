import * as React from 'react';
import {View, Image} from 'react-native';

const Start = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(goHome, 700);
  }, []);

  const goHome = () => {
    navigation.navigate('home');
  };
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 700,
      }}>
      <Image
        source={require('../assests/popcorn.png')}
        style={{
          height: 150,
          width: 150,
        }}
      />
    </View>
  );
};

export default Start;
