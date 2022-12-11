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
    paddingBottom: 20,
  },
  iconText: {
    color: '#92929D',
    paddingLeft: 5,
    paddingRight: 5,
  },
  about: {
    paddingTop: 15,
    width: 350,
  },
  movieActors: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 20,
    width: 330,
  },
  actor: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: themeStyle.font.FONT_SIZE_MEDIUM,
    fontWeight: themeStyle.font.FONT_WEIGHT_MEDIUM,
  },
  review: {
    fontSize: themeStyle.font.FONT_SIZE_SMALL,
    fontWeight: themeStyle.font.FONT_WEIGHT,
    width: 230,
    paddingTop: 5,
  },
  rImg: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignItems: 'center',
  },
  ReContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    width: 360,
    justifyContent: 'space-around',
  },
  raiting: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 40, 54, 0.40)',
    position: 'absolute',
    right: 30,
    top: 180,
    height: 35,
    width: 80,
    borderRadius: 20,
  },
});
