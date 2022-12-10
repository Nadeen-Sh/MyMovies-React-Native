import * as React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './MovieDetailsStyle';
import {Tab, TabView} from '@rneui/themed';
import movies from '../../Film';
// import Tabs from '../../components/Tabs Component/TabsComponent';

const MovieDetails = ({route, navigation}) => {
  const {id} = route.params;
  const [index, setIndex] = React.useState(0);
  return (
    <ScrollView>
      <View>
        {movies &&
          movies.map(item =>
            item.imdbID === id ? (
              <View style={{height: 370, padding: 16}}>
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
              </View>
            ) : null,
          )}
      </View>

      <View style={{display: 'flex', alignItems: 'center'}}>
        <View style={{width: 330}}>
          <Tab
            value={index}
            onChange={e => setIndex(e)}
            indicatorStyle={{
              backgroundColor: 'grey',
              height: 3,
            }}
            variant="default">
            <Tab.Item
              title="About"
              titleStyle={{fontSize: 12, color: 'white'}}
            />
            <Tab.Item
              title="Reviwes"
              titleStyle={{fontSize: 12, color: 'white'}}
            />
            <Tab.Item
              title="Cast"
              titleStyle={{fontSize: 12, color: 'white'}}
            />
          </Tab>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
