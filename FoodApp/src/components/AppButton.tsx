import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { buttonStyles as styles } from "../styles/loginStyles";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

export default function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}