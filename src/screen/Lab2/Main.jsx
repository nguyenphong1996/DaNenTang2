import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../component/Lab2/Header';
import Body from '../../component/Lab2/Body';
import Footer from '../../component/Lab2/Footer';

const Main = () => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [lastUpdate, setLastUpdate] = useState('');
    const [footerColor, setFooterColor] = useState('#f0f0f0');

    const handleUpdateInfo = useCallback((newName, newAvatar) => {
        setName(newName);
        setAvatar(newAvatar);
        setLastUpdate(new Date().toLocaleString());
    }, []);

    const handleChangeFooterColor = useCallback(() => {
        setFooterColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }, []);

    return (
        <View style={styles.container}>
            <Header name={name} avatar={avatar} />
            <Body onUpdateInfo={handleUpdateInfo} onChangeFooterColor={handleChangeFooterColor} />
            <Footer lastUpdate={lastUpdate} footerColor={footerColor} />
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
});
