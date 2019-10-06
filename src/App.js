import React from 'react';
import { View, Text } from 'react-native';

import Notes from './components/Notes'

const styles = {
    wrapper: {
        padding: 15
    },
    title: {
        color: '#101010',
        fontSize: 25,
        top: 5
    },
}

const App = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Notes</Text>
            <Notes />
        </View>
    );
};

export default App;
