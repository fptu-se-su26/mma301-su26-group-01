import React from "react";
import { View, Text, TextInput } from "react-native";

import { inputStyles as styles } from "../styles/loginStyles";
import { colors } from "../styles/colors";

type PhoneInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function PhoneInput({
  value,
  onChangeText,
}: PhoneInputProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Số điện thoại</Text>

      <View style={styles.phoneContainer}>
        <View style={styles.prefixBox}>
          <Text style={styles.prefix}>84+</Text>
        </View>

        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Nhập số điện thoại"
          placeholderTextColor={colors.placeholder}
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>
    </View>
  );
}