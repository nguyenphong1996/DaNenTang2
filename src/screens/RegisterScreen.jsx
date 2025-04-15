import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { InputField, SocialLogin, Policy, Button, RegisterLink } from "../components/Component";

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch("w", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });
      const data = await res.json();

      if (res.ok) {
        Alert.alert("✅ Thành công", "Đăng ký thành công!", [
          {
            text: "OK",
            onPress: () => router.push("/"), // Quay lại trang Login bằng Expo Router
          },
        ]);
      } else {
        Alert.alert("❌ Lỗi", data.message || "Không thể đăng ký");
      }
    } catch (err) {
      Alert.alert("Lỗi mạng", "Không thể kết nối tới server");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("@/assets/images/ellipse.png")} style={styles.image} />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Đăng ký</Text>
        <Text style={styles.subText}>Tạo tài khoản mới</Text>
        <InputField placeholder="Họ tên" value={name} onChangeText={setName} />
        <InputField placeholder="Email" value={email} onChangeText={setEmail} />
        <InputField placeholder="Số điện thoại" value={phone} onChangeText={setPhone} />
        <InputField placeholder="Mật khẩu" secureTextEntry value={password} onChangeText={setPassword} />
        <Policy />
        <Button title="Đăng ký" onPress={handleRegister} />
        <SocialLogin />
        <RegisterLink
        question="Bạn đã có tài khoản?"
        action="Đăng nhập"
        onPress={() => router.push("/")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageContainer: { flex: 1 },
  image: { width: "100%", height: "100%" },
  formContainer: { padding: 20 },
  welcomeText: { fontSize: 24, fontWeight: "bold" },
  subText: { color: "#888" },
});
