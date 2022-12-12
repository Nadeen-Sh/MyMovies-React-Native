import {StyleSheet} from 'react-native';
import themeStyle from '../../theme.style';

export default StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  noResult: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  noResultText: {
    fontFamily: 'Montserrat',
    color: '#EBEBEF',
    fontSize: themeStyle.font.FONT_SIZE,
    fontWeight: themeStyle.font.FONT_WEIGHT_MEDIUM,
    textAlign: 'center',
    width: 240,
    letterSpacing: 0.12,
    textTransform: 'capitalize',
    fontStyle: 'normal',
    paddingTop: 25,
    lineHeight: 26,
  },
  noSaved: {
    fontFamily: 'Montserrat',
    fontSize: themeStyle.font.FONT_SIZE_SMALL,
    textAlign: 'center',
    width: 200,
    letterSpacing: 0.12,
    textTransform: 'capitalize',
    fontStyle: 'normal',
    paddingTop: 20,
    lineHeight: 19,
    color: '#92929D',
  },
  movieResult: {
    display: 'flex',
    flexDirection: 'row',
    width: 327,
    paddingTop: 10,
  },
  title: {
    color: themeStyle.colors.PRIMARY_COLOR,
    fontSize: themeStyle.font.FONT_SIZE,
    fontWeight: themeStyle.font.FONT_WEIGHT,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    lineHeight: 27,
  },
  details: {
    paddingLeft: 30,
    paddingTop: 18,
  },
  rating: {
    paddingLeft: 8,
    color: themeStyle.colors.PRIMARY_COLOR,
    fontSize: 12,
  },
  colorRating: {
    color: '#FF8700',
  },
});
