import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import selectors from '../redux/selectors/notes'

const styles = {
    content: {
        marginTop: 15
    },
    noteTitle: {
        fontSize: 15,
        paddingBottom: 10
    }
}

const Notes = () => {
    const notes = useSelector(selectors.getNotes);
    return (
        <View style={styles.content}>
            {notes.map(note => <Text style={styles.noteTitle}>{note.text}</Text>)}
        </View>
    );
};

export default Notes;
