import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ lastUpdate, footerColor }) => {
    return (
        <View style={[styles.footer, { backgroundColor: footerColor }]}>
            <Text style={styles.footerText}>Thời gian bạn cập nhật thông tin: {lastUpdate}</Text>
        </View>
    );
};

export default memo(Footer);

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        alignItems: 'center'
    },
    footerText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
});
