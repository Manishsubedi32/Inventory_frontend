import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type IconSymbolName =
  | "house.fill"
  | "paperplane.fill"
  | "list.bullet"
  | "camera.fill";

type Props = {
  name: IconSymbolName;
  size?: number;
  color: string;
};

const ICON_MAP: Record<
  IconSymbolName,
  React.ComponentProps<typeof Ionicons>["name"]
> = {
  "house.fill": "home",
  "paperplane.fill": "paper-plane",
  "list.bullet": "list",
  "camera.fill": "camera",
};

export function IconSymbol({ name, size = 24, color }: Props) {
  return <Ionicons name={ICON_MAP[name]} size={size} color={color} />;
}
