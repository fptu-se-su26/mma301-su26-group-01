import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const landingStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.grayBg,
  },
  container: {
    flex: 1,
  },
  header: {
    height: 210,
    backgroundColor: colors.orange,
    paddingTop: 50,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 18,
  },
  searchBox: {
    flex: 1,
    height: 42,
    borderRadius: 25,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: colors.dark,
  },
  sectionTitle: {
    marginTop: -70,
    marginLeft: 22,
    marginBottom: 20,
    color: colors.white,
    fontSize: 22,
    fontWeight: "700",
  },
  backButton: {
    marginRight: 14,
    },
  banner: {
    height: 200,
    marginHorizontal: 22,
    borderRadius: 18,
    overflow: "hidden",
    padding: 28,
    justifyContent: "center",
  },
  bannerImage: {
    borderRadius: 18,
  },
  bannerSmall: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "800",
  },
  bannerTitle: {
    color: colors.white,
    fontSize: 32,
    fontWeight: "900",
    marginTop: 26,
  },
  bannerButton: {
    marginTop: 24,
    width: 120,
    height: 42,
    borderRadius: 24,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerButtonText: {
    color: colors.orange,
    fontSize: 16,
    fontWeight: "800",
  },
  categoryRow: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 26,
  },
  categoryItem: {
    alignItems: "center",
    width: 70,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 16,
    color: colors.dark,
  },
});