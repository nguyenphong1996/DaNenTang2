import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
// 1) Import các hook và hàm từ Reanimated
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';

export default function Bai1() {
    const translateY = useSharedValue(0);


    const handleMove = () => {

        const screenHeight = Dimensions.get('window').height - 200;

        const randomY = Math.floor(Math.random() * screenHeight);

        translateY.value = withTiming(randomY, {
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
        });
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <View style={styles.container}>
            <Button title="MOVE" onPress={handleMove} />
            <Animated.View style={[styles.box, animatedStyle]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    box: {
        width: 60,
        height: 60,
        backgroundColor: '#0033cc', 
        marginTop: 20,
        borderRadius: 8,
    },
});
