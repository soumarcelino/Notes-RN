import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';

const styles = {
    title: {
        fontSize: 16
    },
    description: {
        fontSize: 14
    },
    ripple: {
        padding: 15
    }
}

const Card = ({ title, description }) => {
    return (
        <TouchableNativeFeedback>
            <View style={styles.ripple}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

export default Card;
