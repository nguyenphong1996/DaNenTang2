import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export const Title = ({ title }) => {
    return (
        <Text style={styles.title}>
            {title}
        </Text>
    )
};

export const Card = ({ children }) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
};

export const Items = ({ label, value }) => {
    return (
        <View style={styles.items}>
            <Text style={styles.itemsLable}>{label}:</Text>
            <Text style={styles.itemsValue}>{value}</Text>
        </View>
    )
}

export const SubTitle = ({ subtitle }) => {
    return (
        <Text style={styles.subtitle}>
            {subtitle}
        </Text>
    )
};

export const Button = ({ title, onPress }) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.textButton}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const Wrapper = ({ children }) => {
    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            {children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    card: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    items: {
        padding: 10,
    },
    itemsLable: {
        fontSize: 16,
        fontWeight: '300',
        color: 'gray',
    },
    itemsValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
    },
    button: {
        padding: 10,
        margin: 10,
        backgroundColor: 'skyblue',
        alignItems: 'center',
    },
    textButton: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    wrapper: {
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        marginVertical: 5,
    },
})