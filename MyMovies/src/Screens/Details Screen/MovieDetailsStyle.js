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
    paddingLeft: 30,
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
  movieDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  iconText: {
    color: '#92929D',
    paddingLeft: 5,
    paddingRight: 5,
  },
});
