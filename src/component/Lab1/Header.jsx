import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = ({ icon, title, avatar }) => {
    return (
        <View style={styles.container}>
            {icon ? (<TouchableOpacity style={styles.backButton}>
                <AntDesign name="left" size={20} color="black" />
            </TouchableOpacity>
            ) : (<View style={styles.box}></View>)}

            {title ? (<Text style={styles.title}>{title}</Text>) : (<View style={styles.box}></View>)}

            {avatar ? (<Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                style={styles.avatar}
            />) : (<View style={styles.box}></View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        padding: 15,
    },
    backButton: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Arial',
        textAlign: 'center'
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    box: {
        width: 40,
        height: 40,
    }
});

export default Header;
