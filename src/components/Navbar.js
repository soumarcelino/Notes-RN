import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';


export default function ({ title, icon }) {
    return (
        <View style={styles.nav}>
            <Icon style={styles.icon} name={icon} size={30} color="#464646" />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        paddingLeft: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 15
    },
    title: {
        color: '#464646',
        fontWeight: 'bold',
        fontSize: 25,
        top: 5
    },
    icon: {
        paddingRight: 5,
        top: 5
    }
});