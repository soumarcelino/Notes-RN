import React from 'react';
import { View, Text } from 'react-native';

const styles = {
    content: {
        marginTop: 15
    },
    noteTitle: {
        fontSize: 15,
        paddingBottom: 10
    }
}

const notes = [
    { text: 'Ola tudo bem?' },
    { text: 'Essa nota é massa' },
    { text: 'Muito rápido para criar' }
];

const Notes = () => {
    return (
        <View style={styles.content}>
            {notes.map(note => <Text style={styles.noteTitle}>{note.text}</Text>)}
        </View>
    );
};

export default Notes;
