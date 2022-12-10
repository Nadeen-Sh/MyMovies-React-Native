import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Section,
  Image,
} from 'react-native';

import styles from './MovieDetailsStyle';

import movies from '../../Film';
// import Tabs from '../../components/Tabs Component/TabsComponent';

const MovieDetails = ({route, navigation}) => {
  const {id} = route.params;
  return (
    <ScrollView>
      <View>
        <View>
          <Text>Details</Text>
        </View>

        {movies &&
          movies.map(item =>
            item.imdbID === id ? (
              <View style={{height: 500, padding: 16}}>
                <Image
                  source={{uri: item.image !== '' ? item.image : undefined}}
                  style={{
                    height: 210.94,
                    width: 375,
                  }}
                />
                <Image
                  source={{uri: item.image !== '' ? item.image : undefined}}
                  style={styles.profile}
                />

                <View style={styles.movieTitleContainer}>
                  <Text style={styles.movieTitle}>{item.Title}</Text>
                </View>
              </View>
            ) : null,
          )}
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
