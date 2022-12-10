import {StyleSheet} from 'react-native';
import themeStyle from '../../theme.style';

export default StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: themeStyle.colors.PRIMARY_COLOR,
    fontSize: themeStyle.font.FONT_SIZE,
    fontWeight: themeStyle.font.FONT_WEIGHT_MEDIUM,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    lineHeight: 27,
    width: 327,
  },
  titleContainer: {
    height: 27,
    marginTop: 42,
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
  bigCard: {
    borderRadius: 16,
    marginLeft: 12,
    marginTop: 12,
  },
  ScrollView: {
    height: 300,
    width: 327,
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
  containerCards: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 12,
  },
  searchIcon: {
    paddingRight: 12,
  },
  searchInput: {
    paddingLeft: 20,
    width: 270,
  },
});
