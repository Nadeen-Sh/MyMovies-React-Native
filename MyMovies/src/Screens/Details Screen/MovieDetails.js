import * as React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './MovieDetailsStyle';
import {Tab} from '@rneui/themed';
import movies from '../../Film';
import AppBarComponent from '../../components/AppBar Component/AppBarComponent';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'rn_sqlite',
});

const MovieDetails = ({route, navigation}) => {
  const {id} = route.params;
  const [index, setIndex] = React.useState(0);
  const [imdbId, setImdbId] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [img, setImg] = React.useState('');
  const [poster, setPoster] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [year, setYear] = React.useState('');
  const [genre, setGenre] = React.useState('');
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    createTables();
  }, []);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS WchList (id INTEGER PRIMARY KEY AUTOINCREMENT, imdbId VARCHAR(20), title VARCHAR(20), img TEXT, poster TEXT, rate VARCHAR(20),year VARCHAR(20),genre VARCHAR(20), time VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log('table created successfully');
          movies.map(item => {
            if (item.imdbID === id) {
              setTitle(item.Title);
              setImdbId(item.imdbID);
              setImg(item.image);
              setPoster(item.Poster);
              setRate(item.imdbRating);
              setTime(item.Runtime);
              setGenre(item.Genre);
              setYear(item.Year);
            }
          });
        },
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
  };

  const addMovie = () => {
    if (!title) {
      alert('Error saving');
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO WchList (imdbId,title,img,poster,rate,year,genre,time) VALUES (?,?,?,?,?,?,?,?)`,
        [imdbId, title, img, poster, rate, year, genre, time],
        (sqlTxn, res) => {
          console.log(`${title} added successfully `);
        },
        error => {
          console.log('error on adding movie ' + error.message);
        },
      );
    });
  };

  return (
    <ScrollView>
      <View>
        <AppBarComponent
          icon="bookmark"
          goback={() => navigation.goBack()}
          Title="Detail"
          onpress={addMovie}
        />
        {movies &&
          movies.map((item, key) =>
            item.imdbID === id ? (
              <View style={{padding: 16}} key={key}>
                <Image
                  source={{uri: item.Poster !== '' ? item.Poster : undefined}}
                  style={{
                    height: 210.94,
                    width: 375,
                  }}
                />
                <Image
                  source={{uri: item.image !== '' ? item.image : undefined}}
                  style={styles.profile}
                />
                <View style={styles.raiting}>
                  <Icon
                    type="EvilIcons"
                    name="star"
                    color="#FF8700"
                    size={14}
                  />
                  <Text style={{paddingLeft: 3}}>{item.imdbRating}</Text>
                </View>

                <View style={styles.movieTitleContainer}>
                  <Text style={styles.movieTitle}>{item.Title}</Text>
                </View>
                <View style={[styles.movieDetails, styles.detailContainer]}>
                  <View style={styles.movieDetails}>
                    <Icon
                      type="EvilIcons"
                      name="calendar"
                      color="#92929D"
                      size={15}
                    />
                    <Text style={styles.iconText}>{item.Year}</Text>
                  </View>
                  <Text style={styles.iconText}> | </Text>
                  <View style={styles.movieDetails}>
                    <Icon
                      type="EvilIcons"
                      name="film"
                      color="#92929D"
                      size={15}
                    />

                    <Text style={styles.iconText}>{item.Genre}</Text>
                  </View>
                  <Text style={styles.iconText}> | </Text>
                  <View style={styles.movieDetails}>
                    <Icon
                      type="EvilIcons"
                      name="clock-o"
                      color="#92929D"
                      size={15}
                    />
                    <Text style={styles.iconText}>{item.Runtime}</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <View style={{width: 390}}>
                    <Tab
                      value={index}
                      onChange={e => setIndex(e)}
                      indicatorStyle={{
                        backgroundColor: 'grey',
                        height: 3,
                      }}
                      variant="default">
                      <Tab.Item
                        title="About movie"
                        titleStyle={{fontSize: 12, color: 'white'}}
                      />
                      <Tab.Item
                        title="Reviews"
                        titleStyle={{fontSize: 12, color: 'white'}}
                      />
                      <Tab.Item
                        title="Cast"
                        titleStyle={{fontSize: 12, color: 'white'}}
                      />
                    </Tab>
                  </View>
                  {index === 0 ? (
                    <View>
                      <Text style={[styles.movieDetails, styles.about]}>
                        {item.Plot}
                      </Text>
                    </View>
                  ) : index === 1 ? (
                    <View>
                      {item.Reviews.map(review => {
                        return (
                          <View style={styles.ReContainer}>
                            <View style={styles.rImg}>
                              <Image
                                source={review.uri}
                                style={{
                                  height: 44,
                                  width: 44,
                                }}
                              />
                              <Text
                                style={{
                                  color: '#0296E5',
                                  paddingTop: 5,
                                }}>
                                {review.rate}
                              </Text>
                            </View>
                            <View
                              tyle={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                              }}>
                              <Text style={styles.name}>{review.name}</Text>
                              <Text style={[styles.review]}>
                                {review.review}
                              </Text>
                            </View>
                          </View>
                        );
                      })}
                    </View>
                  ) : (
                    <View style={styles.movieActors}>
                      {item.Actors.map(actor => {
                        return (
                          <View style={styles.actor}>
                            <Image
                              source={require('../../assests/actor1.png')}
                              style={{
                                height: 100,
                                width: 100,
                                borderRadius: 50,
                              }}
                            />
                            <Text>{actor}</Text>
                          </View>
                        );
                      })}
                    </View>
                  )}
                </View>
              </View>
            ) : null,
          )}
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
