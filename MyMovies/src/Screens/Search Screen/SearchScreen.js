import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import movies from '../../Film';
import styles from './SearchStyle';
import Card from '../../components/Card Component/Card';
import AppBarComponent from '../../components/AppBar Component/AppBarComponent';

const SearchScreen = ({route, navigation}) => {
  const [search, setSearch] = React.useState('');
  const [result, setResult] = React.useState([]);

  const searchMovie = () => {
    if (search) {
      const filterd = movies.filter(item => {
        return (
          item.Title.toLowerCase().includes(search.toLowerCase()) ||
          item.Genre.toLowerCase().includes(search.toLowerCase()) ||
          item.Year.includes(search)
        );
      });

      setResult(filterd);
    }
  };

  React.useEffect(() => {
    if (route.params !== undefined) {
      const {id} = route.params;
      if (id) {
        setSearch(id);
      }
    } else {
      setSearch('');
    }
  }, []);

  React.useEffect(() => {
    searchMovie();
  }, [search]);

  return (
    <ScrollView>
      <View style={styles.pageContainer}>
        <AppBarComponent
          icon="exclamation"
          goback={() => navigation.goBack()}
          Title="Search"
        />
        <View style={styles.searchbar}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search ..."
          />
          <TouchableOpacity onPress={searchMovie} style={styles.searchIcon}>
            <Icon type="EvilIcons" name="search" color="#67686D" size={30} />
          </TouchableOpacity>
        </View>
        {result.length !== 0 ? (
          <View>
            {result.map((item, index) => {
              return (
                <View style={styles.movieResult}>
                  <View>
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
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.title}>{item.Title}</Text>
                    <View style={styles.movieResult}>
                      <Icon
                        type="EvilIcons"
                        name="star"
                        color="#FF8700"
                        size={15}
                      />
                      <Text style={[styles.rating, styles.colorRating]}>
                        {item.imdbRating}
                      </Text>
                    </View>
                    <View style={styles.movieResult}>
                      <Icon
                        type="EvilIcons"
                        name="calendar"
                        color="#FFFFFF"
                        size={15}
                      />
                      <Text style={styles.rating}>{item.Year}</Text>
                    </View>
                    <View style={styles.movieResult}>
                      <Icon
                        type="EvilIcons"
                        name="film"
                        color="#FFFFFF"
                        size={15}
                      />
                      <Text style={styles.rating}>{item.Genre}</Text>
                    </View>
                    <View style={styles.movieResult}>
                      <Icon
                        type="EvilIcons"
                        name="clock-o"
                        color="#FFFFFF"
                        size={15}
                      />
                      <Text style={styles.rating}>{item.Runtime}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        ) : (
          <View style={styles.noResult}>
            <Image
              source={require('../../assests/noresult.png')}
              style={{
                height: 86,
                width: 86,
                color: 'red',
              }}
            />
            <Text style={styles.noResultText}>
              we are sorry, we can not find the movie :(
            </Text>
            <Text style={styles.noSearch}>
              Find your movie by Type title, categories, years, etc{' '}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
