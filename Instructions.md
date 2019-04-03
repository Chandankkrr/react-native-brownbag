# Instructions

```node
expo init foodtrucks
```

- Open the directory in code editor

- Install `react-navigation` npm package

```node
yarn add react-navigation
```

- Add the following after App class. Remove `default` keyword

```javascript
const appStack = createStackNavigator({
  Home:{
   screen: App
  }
});

const appDrawer = createDrawerNavigator({
  Home:{
    screen: appStack
  }
});

export default application = createAppContainer(appDrawer);
```

- Install `react-native-vector-icons`

```npm
yarn add react-native-vector-icons
```

- Let's add some styling to the `header`

- Add import for `Icon` and `Alert`

```javascript
import { StyleSheet, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
```

- Add following static navigation property to the app class

```javascript
  static navigationOptions = ({ navigation }) => ({
    title: 'Food trucks',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft:
      <Icon
        name="menu"
        size={35}
        color={'#fff'}
        style={{ marginLeft: 5 }}
        onPress={() => navigation.openDrawer()} />,
    headerRight:
      <Icon
        name="favorite-border"
        size={35}
        color={'#fff'}
        style={{ marginRight: 5 }}
        onPress={() => Alert.alert(
          'Sync Complete',
          'All your data are belong to us.',
          [
            { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        )} />
  });
  ```

- Let's create the top food component that has horizontal scrolling

- Setup some data and add a constructor

```javascript
constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -37.8312404,
        longitude: 144.988771,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      restaurants: [
        {
          id: '11',
          latitude: -37.840000,
          longitude: 144.988998,
          title: 'Richmond',
          description: 'Waffle place',
          imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'
        },
        {
          id: '12',
          latitude: -37.794540,
          longitude: 144.956696,
          title: 'Parkville',
          description: 'Cereal place',
          imageUrl: 'https://images.unsplash.com/photo-1504712598893-24159a89200e'
        },
        {
          id: '13',
          latitude: -37.803001,
          longitude: 145.001999,
          title: 'Abbotsford',
          description: 'Donut place',
          imageUrl: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94'
        },
        {
          id: '14',
          latitude: -37.841110,
          longitude: 144.954620,
          title: 'Albert Park',
          description: 'Icecream place',
          imageUrl: 'https://images.unsplash.com/photo-1488900128323-21503983a07e'
        },
      ],
      selectedRestaurant: {
        id: '11',
        latitude: -37.8312404,
        longitude: 144.988771,
        title: 'Richmond',
        description: 'Waffle place',
      }
    };
  }
```

- Add import for `StatusBar`, `ScrollView`, `TouchableOpacity`, `Image`

```javascript
import { StyleSheet, Text, View, Alert, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
```

- Update the render method

```javascript
render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.foodContainer}>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {
              this.state.restaurants.map(restaurant => (
                <TouchableOpacity
                  key={restaurant.title}
                  style={styles.div}>
                  <Image
                    source={{ uri: restaurant.imageUrl }}
                    style={styles.image} />
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}
```

- Add following to the styles

```css
div: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  foodContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 180,
    resizeMode: 'cover',
    borderRadius: 15
  }
```

- Let's now work on the map container

install `react-native-maps`

```npm
yarn add react-native-maps
```

- Add import for the `MapView`, `Marker` and `Platform`

```javascript
import { StyleSheet, Text, View, Alert, StatusBar, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
```

- Update render method to add new map component

```javascript
render() {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle="dark-content" />
          <View style={styles.foodContainer}>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              {
                this.state.restaurants.map(restaurant => (
                  <TouchableOpacity
                    key={restaurant.title}
                    onPress={() => this.onRestaurantSelection(restaurant)}
                    style={styles.div}>
                    <Image
                      source={{ uri: restaurant.imageUrl }}
                      style={styles.image} />
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          </View>
          <View style={Platform.OS == 'ios' ? styles.mapSectionIos : styles.mapSectionAndroid}>
            <MapView
              style={{ flex: 1 }}
              region={this.state.region}
              showsUserLocation={true}>
              <Marker
                coordinate={this.state.selectedRestaurant}
                title={this.state.selectedRestaurant.title}
                description={this.state.selectedRestaurant.description}
                key={this.state.selectedRestaurant.id}
              />
            </MapView>
          </View>
        </View>
      </View>
    );
  }
}
```

- Map container will take up the entire screen

- Add following styles to `StyleSheet` to fix

```css
mapSectionIos: {
    flex: 3,
  },
  mapSectionAndroid: {
    flex: 2,
    marginTop: 5,
  }
```

- Clicking on the individual food button will throw an error,
need to add the method that sets the `Marker` on the map

```javascript
  onRestaurantSelection = (selectedRestaurant) => {
    this.setState({ selectedRestaurant });
  }
```

## Enjoy
