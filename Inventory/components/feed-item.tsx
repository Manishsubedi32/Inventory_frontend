import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export interface FeedItemProps {
  // strict typescript interface for the props that the FeedItem component expects to receive. This helps ensure that the component is used correctly and that the data passed to it is of the expected type.
  id: string;
  image: string;
  title: string;
  description: string;
  cost: number;
  onPress?: () => void; // the "?" function is optional. If you pass a function here (like navigating to a detail screen), the card will use it; if not, it won't crash.
}

export function FeedItem({
  id,
  image,
  title,
  description,
  cost,
  onPress,
}: FeedItemProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"]; // if the system can't figure out the color scheme, it defaults to "light". This ensures that the app has a consistent appearance even in edge cases where the color scheme might not be detected properly.

  return (
    <Pressable //entier component is a button
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.tabIconDefault,
        },
      ]}
      onPress={onPress}
    >
      <Image source={{ uri: image }} style={styles.image} contentFit="cover" />

      <View style={styles.content}>
        <Text
          style={[styles.title, { color: colors.text }]}
          numberOfLines={
            2
          } /* If a user types a long title, it will be truncated within 2 lines */
        >
          {title}
        </Text>

        <Text
          style={[styles.description, { color: colors.tabIconDefault }]}
          numberOfLines={2}
        >
          {description}
        </Text>

        <View style={styles.footer}>
          <Text style={[styles.cost, { color: colors.tint }]}>
            ${cost.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: "#e0e0e0",
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cost: {
    fontSize: 18,
    fontWeight: "700",
  },
});
