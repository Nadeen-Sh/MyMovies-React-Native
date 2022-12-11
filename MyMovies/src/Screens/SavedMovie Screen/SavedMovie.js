import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import AppBarComponent from '../../components/AppBar Component/AppBarComponent';
import styles from './SavedMovieStyle';

const SavedMovies = () => {
  const [result, setResult] = React.useState([]);

  return (
    <ScrollView>
      <View style={styles.pageContainer}>
        <AppBarComponent
          goback={() => navigation.goBack()}
          Title="Watch list"
        />
        {result.length !== 0 ? (
          <View></View>
        ) : (
          <View style={styles.noResult}>
            <Image
              source={require('../../assests/watchList.png')}
              style={{
                height: 86,
                width: 86,
                color: 'red',
              }}
            />
            <Text style={styles.noResultText}>There is no movie yet!</Text>
            <Text style={styles.noSaved}>
              Find your movie by Type title, categories, years, etc
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SavedMovies;
