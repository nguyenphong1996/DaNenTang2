import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { InputField, SocialLogin, RememberMe, Button, RegisterLink } from "../components/Component";

export default function LoginScreen() {
  const router = useRouter(); 
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailOrPhone, password }),
      });
      const data = await res.json();

      if (res.ok) {
        Alert.alert("✅ Thành công", "Đăng nhập thành công!");
        // Chuyển sang trang Home nếu cần: router.push("/home");
      } else {
        Alert.alert("❌ Lỗi", data.message || "Đăng nhập thất bại");
      }
    } catch (err) {
      Alert.alert("Lỗi mạng", "Không thể kết nối tới server");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("@/assets/images/ellipse.png")} style={styles.image} />
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="left" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Chào mừng bạn</Text>
        <Text style={styles.subText}>Đăng nhập tài khoản</Text>
        <InputField
          placeholder="Email hoặc số điện thoại"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
        />
        <InputField
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <RememberMe />
        <Button title="Đăng nhập" onPress={handleLogin} />
        <SocialLogin />
        <RegisterLink
          question="Bạn chưa có tài khoản?"
          action="Tạo tài khoản"
          onPress={() => router.push("/register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageContainer: { flex: 1 },
  image: { width: "100%", height: "100%" },
  backButton: { position: "absolute", top: 30, left: 10 },
  formContainer: { padding: 20 },
  welcomeText: { fontSize: 24, fontWeight: "bold" },
  subText: { color: "#888" },
});
