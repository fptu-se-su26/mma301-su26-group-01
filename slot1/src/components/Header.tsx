import { View, Text } from "react-native";
import { GraduationCap } from "lucide-react-native";
import { styles } from "../styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <GraduationCap size={28} color="#9b4a17" />

      <Text style={styles.headerTitle}>FPT University</Text>
    </View>
  );
};

export default Header;