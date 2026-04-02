import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

type CameraOpenProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  onOpen?: () => void;
};

export default function CameraOpen({
  title = "Scan Item",
  subtitle = "Open camera to scan the product",
  buttonLabel = "Open Camera",
  onOpen,
}: CameraOpenProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.tabIconDefault,
        },
      ]}
    >
      <View style={styles.headerRow}>
        <Ionicons name="camera" size={28} color={colors.tint} />
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      </View>

      <Text style={[styles.subtitle, { color: colors.tabIconDefault }]}>
        {subtitle}
      </Text>

      <Pressable
        style={[styles.button, { backgroundColor: colors.tint }]}
        onPress={onOpen}
      >
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    marginTop: 4,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
