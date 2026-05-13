import { View, Text, TouchableOpacity } from "react-native";
import { GraduationCap, Mail, Lock, Eye } from "lucide-react-native";

import InputField from "./InputField";
import Divider from "./Divider";
import GoogleButton from "./GoogleButton";
import AnnouncementCard from "./AnnouncementCard";

import { styles } from "../styles";

const LoginCard = () => {
  return (
    <>
      <View style={styles.loginCard}>
        <View style={styles.form}>
          <InputField
            label="Email Sinh viên"
            placeholder="student@fpt.edu.vn"
            leftIcon={<Mail size={22} color="#6d4a36" />}
          />

          <InputField
            label="Mật khẩu"
            placeholder="••••••••"
            secureTextEntry
            leftIcon={<Lock size={22} color="#6d4a36" />}
            rightIcon={<Eye size={22} color="#6d4a36" />}
          />

          <TouchableOpacity style={styles.forgotWrapper}>
            <Text style={styles.forgotText}>Quên mật khẩu?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>

        <Divider />

        <GoogleButton />
      </View>

      <AnnouncementCard />
    </>
  );
};

export default LoginCard;