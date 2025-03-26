import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = ({ name }) => {
    return (
        <View style={styles.header}>
            <AntDesign name="user" size={50} style={styles.iconAvatar} />
            <View style={styles.infoContainer}>
                <Text style={styles.greeting}>Chào ngày mới</Text>
                <Text style={styles.name}>{name || 'Chưa có tên'}</Text>
            </View>
        </View>
    );
};

export default memo(Header);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f8f9fa',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    iconAvatar: {
        color: 'gray',
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    greeting: {
        fontSize: 16,
        color: '#555',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconSettings: {
        marginLeft: 10,
        color: '#333',
    },
});
