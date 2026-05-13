import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";

const GoogleButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <View style={styles.googleIcon} />

      <Text style={styles.googleText}>Đăng nhập bằng Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;