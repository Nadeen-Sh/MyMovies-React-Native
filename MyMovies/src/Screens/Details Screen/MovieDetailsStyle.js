import {StyleSheet} from 'react-native';
import themeStyle from '../../theme.style';

export default StyleSheet.create({
  movieTitle: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: themeStyle.font.FONT_WEIGHT_MEDIUM,
    lineHeight: 27,
    color: themeStyle.colors.PRIMARY_COLOR,
  },
  movieTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 5,
  },
  profile: {
    height: 120,
    width: 95,
    borderRadius: 16,
    position: 'absolute',
    top: 150,
    left: 45,
  },
});
