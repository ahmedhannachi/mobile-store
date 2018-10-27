import React from 'react';
import { Text,Divider } from 'react-native-elements'
import {StyleSheet, View, Image, ProgressViewIOS} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={{flex:2, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text h1>Qualité</Text>

                <Text style={{fontWeight:'bold'}}>
                    Nous offrons des deals exceptionnels pour des produits de premiére qualité
                </Text>
            </View>
            <View style={{flex:5, justifyContent: 'center'}}>
                <Image
                    source={require('./assets/medal.png')}
                    resizeMode={"center"}
                />
            </View>
            <View style={{flex:2}}>

            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: '20%',
        justifyContent: 'space-between'
    },
});