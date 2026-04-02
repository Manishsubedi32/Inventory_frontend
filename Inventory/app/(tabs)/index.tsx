import { useMemo } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/searchTab";
import FeedList, { FeedListItem } from "@/components/feed-list";
import postData from "@/test/post.json";

export default function HomeScreen() {
  const items = useMemo<FeedListItem[]>( //this is used to memoize the items array, so that it only gets recalculated when postData.posts changes. This can help improve performance by avoiding unnecessary re-renders of the FeedList component when the items array hasn't actually changed.
    () =>
      postData.posts.map((post) => ({
        id: post.id,
        image:
          post.image ??
          "https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&w=900&q=80",
        title: post.username,
        description: post.content,
        cost: 0,
      })),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
      </View>
      <FeedList items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
