import React from 'react';
import { View, Text, Button } from 'react-native';

const Create = ({ navigation: { navigate } }) => {
    return (
        <View>
            <Text>NOVA TELA</Text>
            <Button
                title="Voltar"
                onPress={() => { navigate('Home') }}
            />
        </View>
    );
};

export default Create;
