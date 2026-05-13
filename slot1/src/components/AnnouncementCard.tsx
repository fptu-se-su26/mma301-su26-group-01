import { View, Text } from "react-native";
import { MegaphoneOff } from "lucide-react-native";
import { styles } from "../styles";

const AnnouncementCard = () => {
  return (
    <View style={styles.announcementCard}>
      <MegaphoneOff size={24} color="#9b4a17" />

      <View style={{ flex: 1 }}>
        <Text style={styles.announcementTitle}>Thông báo mới</Text>

        <Text style={styles.announcementText}>
          Hệ thống LMS đã được cập nhật phiên bản 2.5. Vui lòng kiểm tra email
          để biết thêm chi tiết.
        </Text>
      </View>
    </View>
  );
};

export default AnnouncementCard;