import React from 'react';
import { TouchableNativeFeedback, Text } from 'react-native';

import Ripple from 'react-native-material-ripple';

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
        <Ripple style={styles.ripple}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </Ripple>
    );
};

export default Card;
