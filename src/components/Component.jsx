import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";


export const InputField = ({ placeholder, icon, value, onChangeText, keyboardType, secureTextEntry }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
            {icon && icon}
        </View>
    );
};



export const SocialLogin = ({ onGooglePress, onFacebookPress }) => {
    return (
        <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={onGooglePress}>
                <AntDesign name="google" size={24} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={onFacebookPress}>
                <AntDesign name="facebook-square" size={24} color="blue" />
            </TouchableOpacity>
        </View>
    );
};

export const RememberMe = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.rememberContainer}>
            <TouchableOpacity
                style={[styles.checkbox, isChecked && { backgroundColor: "green" }]}
                onPress={() => setChecked(!isChecked)}
            >
                {isChecked && <Entypo name="check" size={14} color="white" />}
            </TouchableOpacity>
            <Text style={styles.rememberText}>Nhớ tài khoản</Text>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
            </TouchableOpacity>
        </View>
    );
};


export const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.loginButton} onPress={onPress}>
            <Text style={styles.loginButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export const RegisterLink = ({ question, action }) => {
    return (
        <View style={styles.registerContainer}>
            <Text style={styles.rememberText}>{question}</Text>
            <TouchableOpacity>
                <Text style={styles.registerText}>{action}</Text>
            </TouchableOpacity>
        </View>
    );
};


export const Policy = () => {
    return (
        <View style={styles.policyContainer}>
            <Text style={styles.policyText}>
                Để đăng ký tài khoản, bạn đồng ý{" "}
                <Text style={styles.policyLink}>Terms & Conditions</Text> và{" "}
                <Text style={styles.policyLink}>Privacy Policy</Text>
            </Text>
        </View>
    );
};



const styles = StyleSheet.create({
    policyContainer: {
        marginTop: 10,
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 10
    },
    policyText: {
        fontSize: 14,
        textAlign: "center",
        color: "#000",
    },
    policyLink: {
        color: "#009245",
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
        marginVertical: 30,
    },
    socialButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 50,
    },
    rememberContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    rememberText: {
        color: "gray",
    },
    forgotPasswordText: {
        color: "green",
        fontWeight: "bold",
    },
    loginButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    loginButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    registerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    registerText: {
        color: "#009245",
        fontWeight: "bold",
        marginLeft: 5,
    },

});

