import * as React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';

const AppBarComponent = barProps => {
  const {Title, icon, onpress, goback} = barProps;

  return (
    <View style={{flex: 1, width: '100%', backgroundColor: '#242A32'}}>
      <Appbar.Header style={{flex: 1, backgroundColor: '#242A32'}}>
        <Appbar.BackAction onPress={goback} color="white" />
        <Appbar.Content
          title={Title}
          color="white"
          style={{paddingLeft: '25%'}}
        />

        <Appbar.Action icon={icon} onPress={onpress} color="white" />
      </Appbar.Header>
    </View>
  );
};

export default AppBarComponent;
