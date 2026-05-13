import { View, Text } from "react-native";
import { styles } from "../styles";

const Divider = () => {
  return (
    <View style={styles.divider}>
      <View style={styles.line} />

      <Text style={styles.dividerText}>HOẶC</Text>

      <View style={styles.line} />
    </View>
  );
};

export default Divider;