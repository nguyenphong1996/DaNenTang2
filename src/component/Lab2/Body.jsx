import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Body = ({ onUpdateInfo, onChangeFooterColor }) => {
  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState('');

  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên mới"
        value={newName}
        onChangeText={setNewName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dán địa chỉ avatar mới"
        value={newAvatar}
        onChangeText={setNewAvatar}
      />

      <TouchableOpacity
        style={[styles.button]}
        onPress={() => onUpdateInfo(newName, newAvatar)}
      >
        <Text style={styles.buttonText}>CẬP NHẬT THÔNG TIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button]}
        onPress={onChangeFooterColor}
      >
        <Text style={styles.buttonText}>ĐỔI MÀU FOOTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#007bff'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
