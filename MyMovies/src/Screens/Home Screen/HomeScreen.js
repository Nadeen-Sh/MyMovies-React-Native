import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './HomeStyle';
import movies from '../../Film';
import {Tab} from '@rneui/themed';
import Card from '../../components/Card Component/Card';

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const [index, setIndex] = React.useState(0);

  const sorted = movies.slice().sort((a, b) => b.imdbRating - a.imdbRating);
  const upcoming = movies.filter(item => {
    return item.ComingSoon;
  });

  return (
    <ScrollView>
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What do you want to watch?</Text>
        </View>

        <View style={styles.searchbar}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search ..."
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('search', {
                screen: 'search',
                params: {id: search},
              })
            }
            style={styles.searchIcon}>
            <Icon type="EvilIcons" name="search" color="#67686D" size={30} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} style={styles.ScrollView}>
          {sorted.slice(0, 5).map((item, index) => {
            return (
              <Card
                key={index}
                num={index + 1}
                image={item.image}
                height={210}
                width={144.61}
                raduis={16}
                onClick={() =>
                  navigation.navigate('details', {id: item.imdbID})
                }
              />
            );
          })}
        </ScrollView>

        <ScrollView horizontal={true} style={styles.ScrollViewTab}>
          <Tab
            value={index}
            onChange={e => setIndex(e)}
            indicatorStyle={{
              backgroundColor: 'grey',
              height: 3,
            }}
            variant="default">
            <Tab.Item
              title="Now playing"
              titleStyle={{fontSize: 12, color: 'white'}}
            />
            <Tab.Item
              title="Upcomping"
              titleStyle={{fontSize: 12, color: 'white'}}
            />
            <Tab.Item
              title="Top rated"
              titleStyle={{fontSize: 12, color: 'white'}}
            />
            <Tab.Item
              title="Popular"
              titleStyle={{fontSize: 12, color: 'white'}}
            />
          </Tab>
        </ScrollView>

        {index === 0 && (
          <View style={styles.containerCards}>
            {movies.map((item, index) => {
              if (!item.ComingSoon) {
                return (
                  <Card
                    key={index}
                    image={item.image}
                    height={155.92}
                    width={110}
                    raduis={16}
                    onClick={() =>
                      navigation.navigate('details', {id: item.imdbID})
                    }
                  />
                );
              }
            })}
          </View>
        )}

        {index === 1 && (
          <View style={styles.containerCards}>
            {upcoming.map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item.image}
                  height={155.92}
                  width={110}
                  raduis={16}
                  onClick={() =>
                    navigation.navigate('details', {id: item.imdbID})
                  }
                />
              );
            })}
          </View>
        )}

        {index === 3 && (
          <View style={styles.containerCards}>
            {movies.map((item, index) => {
              if (item.popular) {
                return (
                  <Card
                    key={index}
                    image={item.image}
                    height={155.92}
                    width={110}
                    raduis={16}
                    onClick={() =>
                      navigation.navigate('details', {id: item.imdbID})
                    }
                  />
                );
              }
            })}
          </View>
        )}
        {index === 2 && (
          <View style={styles.containerCards}>
            {sorted.slice(0, 6).map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item.image}
                  height={145.92}
                  width={100}
                  raduis={16}
                  onClick={() =>
                    navigation.navigate('details', {id: item.imdbID})
                  }
                />
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
