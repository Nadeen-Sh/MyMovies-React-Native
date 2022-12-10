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
import {Tab, TabView} from '@rneui/themed';
import Card from '../../components/Card Component/Card';

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState('first');
  const [index, setIndex] = React.useState(0);

  const sorted = movies.slice().sort((a, b) => b.imdbRating - a.imdbRating);

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
            onPress={() => navigation.navigate('search')}
            style={styles.searchIcon}>
            <Icon type="EvilIcons" name="search" color="#67686D" size={30} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} style={styles.ScrollView}>
          {sorted.map((item, index) => {
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

        <ScrollView horizontal={true}>
          <Tab
            value={index}
            onChange={e => setIndex(e)}
            indicatorStyle={{
              backgroundColor: 'white',
              height: 3,
            }}
            variant="primary">
            <Tab.Item title="Now playing" titleStyle={{fontSize: 12}} />
            <Tab.Item title="Upcomping" titleStyle={{fontSize: 12}} />
            <Tab.Item title="Top rating" titleStyle={{fontSize: 12}} />
            <Tab.Item title="Popular" titleStyle={{fontSize: 12}} />
          </Tab>
        </ScrollView>

        {index === 0 && (
          <View style={styles.containerCards}>
            {movies.map((item, index) => {
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

        {index === 2 && (
          <View style={styles.containerCards}>
            {sorted.map((item, index) => {
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
