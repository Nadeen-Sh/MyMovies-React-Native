import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardStyle: {
    borderRadius: 16,
    marginLeft: 12,
    marginTop: 12,
  },
  numberCard: {
    position: 'absolute',
    left: 0,
    top: 130,
    zIndex: 100000,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontweight: 600,
    fontSize: 96,
    lineHeight: 117,
    color: '#242A32',
    textShadowColor: 'rgba(2, 150, 229, 1)',
    textShadowOffset: {width: -2, height: -2},
    textShadowRadius: 2,
  },
});
