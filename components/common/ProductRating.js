import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { horizontalScale, verticalScale } from "../../utils/responsive/metrices";
import textStyles from "../../theme/styles";

export default function ProductRating({ rating }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: verticalScale(5) }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {Array(4)
          .fill("")
          .map((star, index) => (
            <AntDesign
              key={index}
              name="star"
              size={12}
              color="#FDCC0D"
              style={{ marginRight: horizontalScale(1) }}
            />
          ))}
        <AntDesign
          name="staro"
          size={12}
          color="#FDCC0D"
          style={{ marginRight: horizontalScale(1) }}
        />
      </View>
      <Text
        style={{
          ...textStyles.textRegular10,
          marginLeft: horizontalScale(2),
          marginTop: verticalScale(1),
        }}
      >
        ({rating?.count})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
