import React from 'react';
import {Text} from 'react-native-elements'
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';


export default class App extends React.Component {
    render() {
        return (
            <Swiper style={styles.wrapper} loop={false} dotStyle={{backgroundColor: "#838383"}} activeDotColor={"#de486b"}>
                <View style={styles.slide1}>
                    <View style={styles.container}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text h1 style={{color: '#000'}}>Visualisez</Text>

                            <Text style={{fontWeight: '900', color: '#000'}}>
                                Visualisez nos produits et nos deals!
                            </Text>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>

                        </View>
                    </View>
                </View>
                <View style={styles.slide2}>
                    <View style={styles.container}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text h1 style={{color: '#000'}}>Choisissez</Text>

                            <Text style={{fontWeight: '900', color: '#000'}}>
                                Choisissez le produit qui  vous convient, et nous alons vous appeler pour fixer un rendez-vous!
                            </Text>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>

                        </View>
                    </View>
                </View>
                <View style={styles.slide3}>

                    <View style={styles.container}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text h1 style={{color: '#000'}}>Profitez</Text>

                            <Text style={{fontWeight: '900', color: '#000'}}>
                                Nous vous livrons votre produit, et payer seulement quand vous êtes satisfait!
                            </Text>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>

                        </View>
                    </View>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        justifyContent: 'space-between'
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});