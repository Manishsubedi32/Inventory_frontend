import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleProp, ViewStyle } from "react-native";

export interface FeedItemProps {
  image: string;
  title: string;
  description: string;
  cost: number;
  frameStyle?: StyleProp<ViewStyle>;
  frame?: "default" | "outlined" | "elevated";
}

const frameVariants = StyleSheet.create({
  default: {},
  outlined: { borderWidth: 2 },
  elevated: { elevation: 6, shadowOpacity: 0.2, shadowRadius: 8 },
});

// const ItemCard = (props) => {
//   return (
//     <SafeAreaView style={style.container}>
//       <View style={style.image}>
//         <img src={props.image} alt={props.title} />
//       </View>
//       <Text style={style.title}>{props.title}</Text>
//       <Text style={style.description}>{props.description}</Text>
//       <Text style={style.cost}>${props.cost.toFixed(2)}</Text>
//       <Pressable style={[styles.container]} />
//     </SafeAreaView>
//   );
// };

// export default ItemCard;

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 12,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//     marginBottom: 8,
//   },
//   cost: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#007BFF",
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 12,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//     marginBottom: 8,
//   },
//   cost: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#007BFF",
//   },
// });
