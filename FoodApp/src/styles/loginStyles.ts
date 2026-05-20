import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const loginStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.grayBg,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  backButton: {
    marginTop: 20,
  },
  content: {
    flex: 1,
    paddingTop: 80,
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 40,
    fontWeight: "800",
    color: colors.dark,
  },
  row: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: colors.blue,
    fontSize: 15,
  },
  buttonWrapper: {
    marginTop: 60,
  },
  registerRow: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  normal: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.dark,
  },
  register: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.blue,
    textDecorationLine: "underline",
  },
});

export const inputStyles = StyleSheet.create({
  wrapper: {
    marginTop: 24,
  },
  label: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    color: colors.dark,
  },
  phoneContainer: {
    height: 60,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 30,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  passwordContainer: {
    height: 60,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 30,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  prefixBox: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 2,
    borderRightColor: colors.border,
  },
  prefix: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.dark,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 16,
    color: colors.dark,
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    width: 190,
    height: 56,
    borderRadius: 30,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "800",
  },
});