import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';

import Notes from './components/Notes';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Notes</Text>
                    <Notes />
                </View>
                <ActionButton buttonColor="blue" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15
    },
    title: {
        color: '#101010',
        fontSize: 25,
        top: 5
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
});

export default createAppContainer(AppNavigator);