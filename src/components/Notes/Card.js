import React from 'react';
import { View, Text } from 'react-native';

const styles = {
    title: {
        fontSize: 16
    },
    description: {
        fontSize: 14
    },
    item: {
        marginBottom: 15
    }
}

const Card = ({ title, description }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

export default Card;
