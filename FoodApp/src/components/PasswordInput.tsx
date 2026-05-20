import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

import { inputStyles as styles } from "../styles/loginStyles";
import { colors } from "../styles/colors";

type PasswordInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function PasswordInput({
  value,
  onChangeText,
}: PasswordInputProps) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Mật khẩu</Text>

      <View style={styles.passwordContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Nhập mật khẩu"
          placeholderTextColor={colors.placeholder}
          secureTextEntry={hidePassword}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          {hidePassword ? (
            <Eye size={24} color={colors.dark} />
          ) : (
            <EyeOff size={24} color={colors.dark} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}