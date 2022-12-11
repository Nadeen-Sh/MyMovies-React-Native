import * as React from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import AppBarComponent from '../../components/AppBar Component/AppBarComponent';
import styles from './SavedMovieStyle';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'rn_sqlite',
});

const SavedMovies = ({navigation}) => {
  const [result, setResult] = React.useState([]);

  const getMovies = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM movies ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('movies retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({id: item.id, name: item.name});
            }

            setResult(results);
          }
        },
        error => {
          console.log('error on getting movies ' + error.message);
        },
      );
    });
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  return (
    <ScrollView>
      <View style={styles.pageContainer}>
        <AppBarComponent
          goback={() => navigation.goBack()}
          Title="Watch list"
        />

        {result.length !== 0 ? (
          <View>
            {result.map(item => {
              return <Text>{item.name}</Text>;
            })}
          </View>
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
