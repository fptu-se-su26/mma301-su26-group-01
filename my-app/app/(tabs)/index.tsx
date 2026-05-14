import { useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './index.styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu');
      return;
    }

		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			router.replace('/(tabs)');
		}, 800);
	};

	const handleGoogleLogin = () => {
		Alert.alert('Thông báo', 'Chức năng đăng nhập Google đang được phát triển');
	};

	const handleForgotPassword = () => {
		Alert.alert('Quên mật khẩu', 'Vui lòng kiểm tra email để đặt lại mật khẩu');
	};

	return (
		<View style={styles.screen}>
			<StatusBar style="dark" />
			<View style={styles.glowOne} />
			<View style={styles.glowTwo} />
			<View style={styles.glowThree} />

			<KeyboardAvoidingView
				style={styles.keyboardShell}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
				<ScrollView
					contentContainerStyle={styles.scrollContent}
					showsVerticalScrollIndicator={false}
					bounces={false}>
					<View style={styles.brandRow}>
						<MaterialIcons name="school" size={22} color="#A44A12" />
						<Text style={styles.brandText}>FPT University</Text>
					</View>

					<View style={styles.heroArea}>
						<View style={styles.heroIconBox}>
							<MaterialIcons name="school" size={42} color="#A44A12" />
						</View>
						<Text style={styles.heroTitle}>Chào mừng trở lại!</Text>
						<Text style={styles.heroSubtitle}>Đăng nhập để tiếp tục hành trình học tập của bạn.</Text>
					</View>

					<View style={styles.formCard}>
						<View style={styles.fieldBlock}>
							<Text style={styles.label}>Email Sinh viên</Text>
							<View style={styles.fieldBox}>
								<MaterialIcons name="mail-outline" size={22} color="#5C4637" style={styles.fieldLeftIcon} />
								<TextInput
									value={email}
									onChangeText={setEmail}
									placeholder="student@fpt.edu.vn"
									placeholderTextColor="#8B857F"
									keyboardType="email-address"
									autoCapitalize="none"
									editable={!loading}
									style={styles.input}
								/>
							</View>
						</View>

						<View style={styles.fieldBlock}>
							<Text style={styles.label}>Mật khẩu</Text>
							<View style={styles.fieldBox}>
								<MaterialIcons name="lock-outline" size={22} color="#5C4637" style={styles.fieldLeftIcon} />
								<TextInput
									value={password}
									onChangeText={setPassword}
									placeholder="••••••••"
									placeholderTextColor="#8B857F"
									secureTextEntry={!showPassword}
									editable={!loading}
									style={styles.input}
								/>
								<TouchableOpacity
									onPress={() => setShowPassword((value) => !value)}
									disabled={loading}
									style={styles.eyeHitbox}>
									<MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#5C4637" />
								</TouchableOpacity>
							</View>
						</View>

						<TouchableOpacity onPress={handleForgotPassword} disabled={loading} style={styles.forgotWrap}>
							<Text style={styles.forgotText}>Quên mật khẩu?</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={[styles.loginButton, loading && styles.loginButtonDisabled]}
							onPress={handleLogin}
							disabled={loading}>
							{loading ? <ActivityIndicator color="#FFFFFF" /> : <Text style={styles.loginText}>Đăng nhập</Text>}
						</TouchableOpacity>

						<View style={styles.dividerRow}>
							<View style={styles.dividerLine} />
							<Text style={styles.dividerText}>HOẶC</Text>
							<View style={styles.dividerLine} />
						</View>

						<TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin} disabled={loading}>
							<Image source={require('@/assets/images/icon.png')} style={styles.googleIcon} />
							<Text style={styles.googleText}>Đăng nhập bằng Google</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.noticeCard}>
						<View style={styles.noticeAccent} />
						<View style={styles.noticeBodyWrap}>
							<View style={styles.noticeHeadRow}>
								<MaterialIcons name="campaign" size={18} color="#A44A12" />
								<Text style={styles.noticeTitle}>Thông báo mới</Text>
							</View>
							<Text style={styles.noticeBody}>
								Hệ thống LMS đã được cập nhật phiên bản 2.5. Vui lòng kiểm tra email để biết thêm chi tiết.
							</Text>
						</View>
					</View>

					<View style={styles.footer}>
						<Text style={styles.footerCopy}>© 2024 FPT University. Academic Innovation Core.</Text>
						<View style={styles.footerLinks}>
							<Text style={styles.footerLink}>Privacy Policy</Text>
							<Text style={styles.footerLink}>Terms of Service</Text>
							<Text style={styles.footerLink}>Help Center</Text>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	);
}
