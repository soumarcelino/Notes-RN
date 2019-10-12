import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import selectors from '../../redux/selectors/notes';
import Card from './Card';


const styles = {
    content: {
        marginTop: 15
    }
}

const Notes = () => {
    const notes = useSelector(selectors.getNotes);
    return (
        <View style={styles.content}>
            {notes.map(({ id, title, description }) => <Card key={id} title={title} description={description} />)}
        </View>
    );
};

export default Notes;
