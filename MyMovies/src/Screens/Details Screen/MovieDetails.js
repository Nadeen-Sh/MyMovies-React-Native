import * as React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './MovieDetailsStyle';
import {Tab, TabView} from '@rneui/themed';
import movies from '../../Film';

const MovieDetails = ({route, navigation}) => {
  const {id} = route.params;
  const [index, setIndex] = React.useState(0);
  return (
    <ScrollView>
      <View>
        {movies &&
          movies.map(item =>
            item.imdbID === id ? (
              <View style={{padding: 16}}>
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
