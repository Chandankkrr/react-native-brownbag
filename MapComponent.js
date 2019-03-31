import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class MapComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: -37.8312404,
                longitude: 144.988771,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={{ flex: 1 }}
                    region={this.state.region}
                    showsUserLocation={true}>
                    <Marker
                        coordinate={this.state.region}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        margin: 15,
        borderRadius: 10
    },
});


export default MapComponent;
