import React from 'react';
import { useSelector } from 'react-redux';
import { View, Alert } from 'react-native';
import selectors from '../../redux/selectors/notes';
import Card from './Card';


const styles = {
    content: {
        marginTop: 15
    }
}

const Notes = ({ onPress }) => {
    const notes = useSelector(selectors.getNotes);
    return (
        <View style={styles.content}>
            {notes.map(note => <Card onPress={onPress} key={note.id} note={note} />)}
        </View>
    );
};

export default Notes;
