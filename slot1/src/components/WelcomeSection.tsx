import { View, Text } from "react-native";
import { GraduationCap } from "lucide-react-native";

import { styles } from "../styles";

const WelcomeSection = () => {
  return (
    <>
      <View style={styles.logoWrapper}>
        <GraduationCap size={42} color="#9b4a17" />
      </View>

      <Text style={styles.welcomeTitle}>
        Chào mừng trở lại!
      </Text>

      <Text style={styles.welcomeText}>
        Đăng nhập để tiếp tục hành trình học tập của bạn.
      </Text>
    </>
  );
};

export default WelcomeSection;