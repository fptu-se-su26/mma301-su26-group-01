import { View, Text, TextInput } from "react-native";
import { styles } from "../styles";

type InputFieldProps = {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  leftIcon: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const InputField = ({
  label,
  placeholder,
  secureTextEntry = false,
  leftIcon,
  rightIcon,
}: InputFieldProps) => {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputBox}>
        {leftIcon}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          secureTextEntry={secureTextEntry}
        />

        {rightIcon}
      </View>
    </View>
  );
};

export default InputField;