import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';

import Navbar from '../components/Navbar';

import Notes from '../components/Notes';
import CreateScreen from './Create';
import OverviewScreen from './Overview';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
                <View style={styles.wrapper}>
                    <Navbar title="My notes" icon="checklist" />
                    <Notes onPress={(note) => navigate('Overview', { note })} />
                </View>
                <ActionButton
                    buttonColor="#464646"
                    onPress={() => { navigate('Create') }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15
    },
    title: {
        color: '#464646',
        fontWeight: 'bold',
        fontSize: 25,
        top: 5
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    nav: {
        paddingLeft: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 15
    },
    navIcon: {
        paddingRight: 5,
        top: 5
    }
});

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Create: {
        screen: CreateScreen
    },
    Overview: {
        screen: OverviewScreen
    }
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

export default createAppContainer(AppNavigator);