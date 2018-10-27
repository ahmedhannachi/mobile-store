import React from 'react';
import {Text} from 'react-native-elements'
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import StepIndicator from 'react-native-step-indicator';


const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#de486b',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#de486b',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#de486b',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#de486b',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#de486b',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#de486b'
}

export default class App extends React.Component {
    render() {
        return (
            <ImageBackground source={require('./assets/walkthrough/bg4.jpg')} style={{width: '100%', height: '100%'}}>

                <View style={styles.container}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text h1 style={{color: '#fff'}}>Qualité</Text>

                        <Text style={{fontWeight: '900', color:'#fff'}}>
                            Nous offrons des deals exceptionnels pour des produits de premiére qualité
                        </Text>
                    </View>
                    <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>

                    </View>
                    <StepIndicator
                        stepCount={4}
                        customStyles={customStyles}
                        currentPosition={1}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        justifyContent: 'space-between'
    },
});