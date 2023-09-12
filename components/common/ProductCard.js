import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/responsive/metrices";
import { colors } from "../../theme/colors";
import textStyles, { iosShadow } from "../../theme/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

let { width } = Dimensions.get("window");

export default function ProductCard({ product }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("NormalStack", {
          screen: "ProductDetails",
          params: { id: product?.id },
        })
      }
    >
      <View
        style={{
          width: "100%",
          paddingVertical: verticalScale(15),
          paddingHorizontal: horizontalScale(15),
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: product?.image }}
          style={{
            width: "100%",
            height: moderateScale(100),
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.prodHeading}>{product?.title?.slice(1, 15) + "..."}</Text>
        <Text style={styles.desc}>{product?.description?.slice(1, 30) + "..."}</Text>
        <View style={styles.priceRow}>
          <Text style={{ ...textStyles.textRegular14 }}>{`$${product?.price}`}</Text>
          <View style={styles.btn}>
            <MaterialCommunityIcons name="arrow-right" size={14} color={colors.white} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 2 - moderateScale(26),
    marginVertical: "auto",
    borderRadius: moderateScale(10),
    backgroundColor: colors.white,
    overflow: "hidden",
    ...iosShadow,
    elevation: 3,
    shadowColor: colors.dark,
    marginBottom: moderateScale(12),
  },
  contentWrapper: {
    paddingHorizontal: horizontalScale(13),
    paddingBottom: verticalScale(15),
  },
  prodHeading: {
    ...textStyles.textSemibold13,
  },
  desc: {
    ...textStyles.textMedium11,
    color: colors.gray,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: verticalScale(10),
  },
  btn: {
    width: moderateScale(25),
    height: moderateScale(25),
    backgroundColor: colors.dark,
    borderRadius: moderateScale(15),
    justifyContent: "center",
    alignItems: "center",
  },
});
