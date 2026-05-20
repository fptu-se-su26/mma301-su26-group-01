import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeft } from "lucide-react-native";

import LogoHeader from "../components/LogoHeader";
import PhoneInput from "../components/PhoneInput";
import PasswordInput from "../components/PasswordInput";
import AppButton from "../components/AppButton";

import { loginStyles as styles } from "../styles/loginStyles";
import { colors } from "../styles/colors";

type LoginScreenProps = {
  onLogin: () => void;
};

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.content}>
          <LogoHeader />

          <Text style={styles.title}>Đăng nhập</Text>

          <PhoneInput value={phone} onChangeText={setPhone} />

          <PasswordInput value={password} onChangeText={setPassword} />

          <View style={styles.row}>
            <Text style={styles.link}>Nhớ mật khẩu</Text>
            <Text style={styles.link}>Quên mật khẩu ?</Text>
          </View>

          <View style={styles.buttonWrapper}>
            <AppButton title="Đăng Nhập" onPress={onLogin} />
          </View>

          <View style={styles.registerRow}>
            <Text style={styles.normal}>Chưa có tài khoản ?</Text>
            <Text style={styles.register}>Đăng Ký</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}