import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 40,
    paddingBottom: 30,
  },

  header: {
    height: 76,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 12,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#9b4a17",
  },

  loginCard: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 28,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },

  logoWrapper: {
    width: 104,
    height: 104,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 32,
  },

  welcomeTitle: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    color: "#111827",
  },

  welcomeText: {
    marginTop: 12,
    fontSize: 17,
    lineHeight: 28,
    textAlign: "center",
    color: "#6b7280",
  },

  form: {
    marginTop: 34,
  },

  formGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 10,
  },

  inputBox: {
    height: 56,
    borderWidth: 1,
    borderColor: "#d7b9a7",
    borderRadius: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: "#374151",
  },

  forgotWrapper: {
    alignItems: "flex-end",
    marginBottom: 24,
  },

  forgotText: {
    color: "#9b4a17",
    fontSize: 15,
    fontWeight: "600",
  },

  loginButton: {
    height: 58,
    backgroundColor: "#f97316",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "700",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginVertical: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#d1d5db",
  },

  dividerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6b7280",
  },

  googleButton: {
    height: 58,
    borderWidth: 2,
    borderColor: "#1f4e79",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },

  googleIcon: {
    width: 26,
    height: 26,
    backgroundColor: "#111827",
    borderRadius: 4,
  },

  googleText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2f4f74",
  },

  announcementCard: {
    marginTop: 28,
    backgroundColor: "#fff6f1",
    borderLeftWidth: 5,
    borderLeftColor: "#9b4a17",
    borderRadius: 16,
    padding: 22,
    flexDirection: "row",
    gap: 16,
  },

  announcementTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 6,
  },

  announcementText: {
    fontSize: 16,
    lineHeight: 25,
    color: "#6b7280",
  },

  footer: {
    marginTop: 70,
    alignItems: "center",
  },

  footerText: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: 14,
  },

  footerLinks: {
    marginTop: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 18,
  },

  footerLink: {
    color: "#4b5563",
    textDecorationLine: "underline",
    fontSize: 14,
  },
});