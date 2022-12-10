import {StyleSheet} from 'react-native';
import themeStyle from '../../theme.style';

export default StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbar: {
    Height: 42,
    width: 327,
    borderRadius: 16,
    backgroundColor: themeStyle.background.BACKGROUND_COLOR_LIGHT,
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchIcon: {
    paddingRight: 12,
  },
  searchInput: {
    paddingLeft: 20,
    width: 270,
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
  noResult: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  noResultText: {
    fontFamily: 'Montserrat',
    color: '#EBEBEF',
    fontSize: themeStyle.font.FONT_SIZE,
    fontWeight: themeStyle.font.FONT_WEIGHT_MEDIUM,
    textAlign: 'center',
    width: 200,
    letterSpacing: 0.12,
    textTransform: 'capitalize',
    fontStyle: 'normal',
    paddingTop: 25,
    lineHeight: 26,
  },
  noSearch: {
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
});
