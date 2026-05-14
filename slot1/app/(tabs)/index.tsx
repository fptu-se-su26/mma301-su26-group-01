import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.topBlock}>
          <View style={styles.logoBox}>
            <Text style={styles.logoIcon}>🎓</Text>
          </View>
          <Text style={styles.brandText}>FPT University</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Chào mừng trở lại!</Text>
          <Text style={styles.subtitle}>Đăng nhập để tiếp tục hành trình học tập của bạn.</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Sinh viên</Text>
            <TextInput
              style={styles.input}
              placeholder="student@fpt.edu.vn"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput
              style={styles.input}
              placeholder="........"
              secureTextEntry
              placeholderTextColor="#999"
            />
          </View>

          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Đăng nhập</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>HOẶC</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.googleBtn}>
            <Text style={styles.googleBtnText}>G Đăng nhập bằng Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noticeCard}>
          <View style={styles.noticeHeader}>
            <Text style={styles.noticeIcon}>🔔</Text>
            <Text style={styles.noticeTitle}>Thông báo mới</Text>
          </View>
          <Text style={styles.noticeText}>
            Hệ thống LMS đã được cập nhật phiên bản 2.5. Vui lòng kiểm tra email để biết thêm chi tiết.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
          <Text style={styles.footerLink}>Terms of Service</Text>
          <Text style={styles.footerLink}>Help Center</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2EE',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  topBlock: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoBox: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 14,
  },
  logoIcon: {
    fontSize: 28,
  },
  brandText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#9B451D',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 26,
    padding: 26,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
    color: '#1D1D1F',
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
    color: '#4D4D4D',
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#E6E2DD',
    borderRadius: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FAF8F5',
    color: '#1A1A1A',
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPass: {
    color: '#D9531E',
    fontSize: 13,
    fontWeight: '700',
  },
  loginBtn: {
    backgroundColor: '#F26F21',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E6E2DD',
  },
  orText: {
    marginHorizontal: 12,
    color: '#8A8A8A',
    fontSize: 12,
    fontWeight: '600',
  },
  googleBtn: {
    height: 52,
    borderWidth: 1,
    borderColor: '#1F3F78',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F3F78',
  },
  noticeCard: {
    marginTop: 20,
    backgroundColor: '#FFF3E5',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#F7D2B0',
  },
  noticeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  noticeIcon: {
    marginRight: 10,
    fontSize: 17,
  },
  noticeTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#8B4100',
  },
  noticeText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#5A4A3C',
  },
  footer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLink: {
    fontSize: 12,
    color: '#6F6F6F',
    textDecorationLine: 'underline',
  },
});
