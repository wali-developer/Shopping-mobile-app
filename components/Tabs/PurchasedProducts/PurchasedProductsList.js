import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/responsive/metrices";
import Card from "./Card";

export default function PurchasedProductsList({ data }) {
  const DATA = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Second Item",
    },
    {
      id: "4",
      title: "Second Item",
    },
    {
      id: "5",
      title: "Second Item",
    },
    {
      id: "6",
      title: "Second Item",
    },
    {
      id: "7",
      title: "Second Item",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card product={item} key={item?.id} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(160),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(20),
    paddingBottom: verticalScale(70),
  },
});
