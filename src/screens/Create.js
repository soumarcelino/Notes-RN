import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../redux/actions/'
import { View, Text, Button, TextInput } from 'react-native';

const styles = {
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
    },
    content: {
        marginTop: 50
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ACB2BE',
        marginBottom: 20
    }
}
const Create = ({ navigation: { navigate } }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const confirmCreate = useCallback(() => {
        navigate('Home');
        dispatch(actions.note.create({ title, description }));
    }, [title, description]);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Criação de notas</Text>
            <View style={styles.content}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="Title"
                />
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
                    placeholder="Description"
                />
                <Button
                    title="Criar nota"
                    onPress={confirmCreate}
                />
            </View>
        </View>
    );
};

export default Create;
