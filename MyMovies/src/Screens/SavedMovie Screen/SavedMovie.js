import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import AppBarComponent from '../../components/AppBar Component/AppBarComponent';
import styles from './SavedMovieStyle';
import {openDatabase} from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../components/Card Component/Card';

const db = openDatabase({
  name: 'rn_sqlite',
});

const SavedMovies = ({navigation}) => {
  const [result, setResult] = React.useState([]);

  const getMovies = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM MwatchList ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('MwatchList retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                id: item.id,
                imdbId: item.imdbId,
                title: item.title,
                img: item.img,
                poster: item.poster,
                rate: item.rate,
                year: item.year,
                genre: item.genre,
                time: item.time,
              });
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
            {result.map((item, index) => {
              return (
                <View style={styles.movieResult} key={index}>
                  <View>
                    <Card
                      key={index}
                      image={item.img}
                      height={145.92}
                      width={100}
                      raduis={16}
                      onClick={() =>
                        navigation.navigate('home', {
                          screen: 'details',
                          params: {id: item.imdbId, name: 'saved'},
                        })
                      }
                    />
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.title}>{item.title}</Text>

                    <View style={styles.movieResult}>
                      <Icon
                        type="EvilIcons"
                        name="star"
                        color="#FF8700"
                        size={15}
                      />
                      <Text style={[styles.rating, styles.colorRating]}>
                        {item.rate}
                      </Text>
                    </View>
                    <View style={styles.movieResult}>
                      <Icon
                        type="EvilIcons"
                        name="calendar"
                        color="#FFFFFF"
                        size={15}
                      />
                      <Text style={styles.rating}>{item.year}</Text>
                    </View>
                    <View style={styles.movieResult}>
                      <Icon
                        type="EvilIcons"
                        name="film"
                        color="#FFFFFF"
                        size={15}
                      />
                      <Text style={styles.rating}>{item.genre}</Text>
                    </View>
                    <View style={styles.movieResult}>
                      <Icon
                        type="EvilIcons"
                        name="clock-o"
                        color="#FFFFFF"
                        size={15}
                      />
                      <Text style={styles.rating}>{item.time}</Text>
                    </View>
                  </View>
                </View>
              );
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
