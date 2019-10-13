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

const Card = ({ note, onPress }) => {
    return (
        <TouchableNativeFeedback onPress={() => onPress && onPress(note)}>
            <View style={styles.ripple}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.description}>{note.description}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

export default Card;
