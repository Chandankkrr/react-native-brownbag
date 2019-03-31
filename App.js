import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import MapComponent from './MapComponent';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRestaurant: {
        lat: -37.8312361,
        lang: 144.988771,
        title: 'Australia',
      }
    };
  }
  onRestaurantSelection(selectedRestaurant) {
    this.setState({ selectedRestaurant });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.foodContainer}>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.div}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0' }}
                  style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.div}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1504712598893-24159a89200e' }}
                  style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.div}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94' }}
                  style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.div}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1488900128323-21503983a07e' }}
                  style={styles.image} />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.section}>
            <MapComponent/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: App,
  },
});

export default MyApp = createAppContainer(MyDrawerNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    flex: 3,
    height: 600,
    borderRadius: 10
  },
  div: {
    width: 200,
    height: 200,
    margin: 15,
    borderRadius: 10
  },
  image:{
    height: 200, 
    resizeMode: 'cover', 
    borderRadius: 15
  }
});
