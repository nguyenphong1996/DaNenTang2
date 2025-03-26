import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../component/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header icon={true} title={"Header"} avatar={true} />
      <Header icon={true} title={"Trang chủ"} avatar={false} />
      <Header icon={true} title={false} avatar={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});

export default HomeScreen;
