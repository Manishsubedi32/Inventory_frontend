import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import CameraOpen from "@/components/camera-open";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { CameraView, useCameraPermissions } from "expo-camera";

const CameraScan = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleOpenCamera = async () => {
    if (!permission?.granted) {
      const result = await requestPermission();
      if (!result.granted) {
        Alert.alert(
          "Permission required",
          "Please allow camera access to scan items.",
        );
        return;
      }
    }

    setIsCameraOpen(true);
  };

  const handleCloseCamera = () => {
    setIsCameraOpen(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {isCameraOpen ? (
        <View style={styles.cameraWrapper}>
          <CameraView style={styles.camera} facing="back" />
          <Pressable
            style={[styles.closeButton, { backgroundColor: colors.tint }]}
            onPress={handleCloseCamera}
          >
            <Text style={styles.closeButtonText}>Close Camera</Text>
          </Pressable>
        </View>
      ) : (
        <CameraOpen onOpen={handleOpenCamera} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cameraWrapper: {
    flex: 1,
    gap: 12,
  },
  camera: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  closeButton: {
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CameraScan;
