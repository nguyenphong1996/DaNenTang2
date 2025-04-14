import React from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { InputField, SocialLogin, Policy, Button, RegisterLink } from "../components/Component";

const handleRegister = () => {
    Alert.alert("Bạn đã nhấn đăng nhập!");
};
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
export default function RegisterScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    source={require("@/assets/images/ellipse.png")}
                    style={styles.image} />
            </View>


            <View style={styles.formContainer}>
                <Text style={styles.welcomeText}>Đăng ký</Text>
                <Text style={styles.subText}>Tạo tài khoản</Text>
                <InputField placeholder="Họ tên" value={name} onChangeText={setName} />
                <InputField placeholder="E-mail" value={email} onChangeText={setEmail} />
                <InputField placeholder="Số điện thoại" value={phone} onChangeText={setPhone} />
                <InputField placeholder="Mật khẩu" value={password} onChangeText={setPassword} />
                <Policy />
                <Button title={"Đăng nhập"}
                    onPress={handleRegister} />
                <SocialLogin />
                <RegisterLink question="Tôi đã có tài khoản" action="Đăng nhập" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
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
        marginTop: -50
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 15,
        backgroundColor: "#F8EEC0",
        padding: 10,
        borderRadius: 20,
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

