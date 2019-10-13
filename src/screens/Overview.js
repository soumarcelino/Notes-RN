import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import selectors from '../redux/selectors/notes';

const styles = {
    wrapper: {
        padding: 10
    }
}
const Overview = ({ navigation: { state: { params: { note } } } }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Visualização de nota {note.title} - </Text>

        </View>
    );
};

export default Overview;
