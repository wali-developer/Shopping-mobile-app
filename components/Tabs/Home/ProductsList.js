import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { horizontalScale, moderateScale } from "../../../utils/responsive/metrices";
import ProductCard from "../../common/ProductCard";

export default function ProductsList({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCard product={item} key={item?.id} />}
        keyExtractor={(item) => item.id}
        numColumns="2"
        columnWrapperStyle={{
          columnGap: moderateScale(12),
        }}
        contentContainerStyle={{
          paddingBottom: moderateScale(350),
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(20),
  },
});
