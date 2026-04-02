import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { FeedItem } from "@/components/feed-item";

export type FeedListItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  cost: number;
};

type FeedListProps = {
  items: FeedListItem[];
};

export default function FeedList({ items }: FeedListProps) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <FeedItem
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          cost={item.cost}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 24,
  },
});
