import { View, Text } from "react-native";
import { styles } from "../styles";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2024 FPT University. Academic Innovation Core.
      </Text>

      <View style={styles.footerLinks}>
        <Text style={styles.footerLink}>Privacy Policy</Text>
        <Text style={styles.footerLink}>Terms of Service</Text>
        <Text style={styles.footerLink}>Help Center</Text>
      </View>
    </View>
  );
};

export default Footer;