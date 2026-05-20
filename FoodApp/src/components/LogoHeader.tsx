import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Utensils } from "lucide-react-native";

import { colors } from "../styles/colors";

export default function LogoHeader() {
  return (
    <View style={styles.container}>
      <Utensils size={60} color={colors.orange} strokeWidth={2.5} />

      <View>
        <Text style={styles.text}>Hôm nay</Text>
        <Text style={styles.text}>ăn gì</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.orange,
    lineHeight: 34,
  },
});