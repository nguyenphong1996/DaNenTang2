import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { InputField, SocialLogin, RememberMe, Button, RegisterLink } from "../components/Component";

const handleLogin = () => {
    Alert.alert("Thông báo", "Bạn đã nhấn đăng nhập!");
}
export default function WellComeSceen() {
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    source={require("@/assets/images/ellipse.png")}
                    style={styles.image} />
                <TouchableOpacity style={styles.backButton}>
                    <AntDesign name="left" size={20} color="white" />
                </TouchableOpacity>
            </View>


            <View style={styles.formContainer}>
                <Text style={styles.welcomeText}>Chào mừng bạn</Text>
                <Text style={styles.subText}>Đăng nhập tài khoản</Text>

                <InputField placeholder="Nhập email hoặc số điện thoại" />
                <InputField placeholder="Mật khẩu" />
                <RememberMe />
                <Button title={"Đăng nhập"}
                    onPress={handleLogin} />
                <SocialLogin />
                <RegisterLink question="Bạn chưa có tài khoản?" action="Tạo tài khoản" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    imageContainer: {
        width: "100%",
        height: "35%",
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 15,
        backgroundColor: "#F8EEC0",
        padding: 10,
        borderRadius: 20,
    },
    formContainer: {
        padding: 20,
    },
    welcomeText: {
        fontSize: 38,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    subText: {
        color: "gray",
        marginBottom: 10,
        textAlign: "center",
        fontWeight: 400,
        fontSize: 24,
        marginBottom: 20,
    },
});

