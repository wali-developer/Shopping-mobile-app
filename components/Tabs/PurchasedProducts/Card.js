import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/responsive/metrices";
import { colors } from "../../../theme/colors";
import textStyles, { iosShadow } from "../../../theme/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Card({ product }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("NormalStack", {
          screen: "PurchasedProductDetails",
          params: { id: product?.id },
        })
      }
    >
      <View style={styles.leftCol}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: product?.image }}
            style={{
              width: moderateScale(58),
              height: moderateScale(58),
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.prodHeading}>
            {`${product?.title?.slice(1, 20)} ${product?.title?.length > 20 ? ".." : ""}`}
          </Text>
          <Text style={styles.desc}>{product?.description?.slice(1, 28) + ".."}</Text>
          <View style={styles.priceRow}>
            <Text style={{ ...textStyles.textRegular12 }}>${product?.price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <MaterialCommunityIcons name="arrow-right" size={15} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: horizontalScale(14),
    paddingVertical: verticalScale(15),
    marginVertical: "auto",
    borderRadius: moderateScale(12),
    backgroundColor: colors.white,
    overflow: "hidden",
    ...iosShadow,
    elevation: 3,
    shadowColor: colors.dark,
    marginBottom: moderateScale(19),
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  leftCol: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper: {
    width: moderateScale(68),
    height: moderateScale(68),
    borderRadius: moderateScale(12),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
  },
  contentWrapper: {
    paddingHorizontal: horizontalScale(13),
    paddingLeft: horizontalScale(25),
  },
  prodHeading: {
    ...textStyles.textSemibold13,
  },
  desc: {
    ...textStyles.textMedium11,
    color: colors.gray,
    paddingVertical: verticalScale(3),
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    width: moderateScale(27),
    height: moderateScale(27),
    backgroundColor: colors.dark,
    borderRadius: moderateScale(6),
    justifyContent: "center",
    alignItems: "center",
  },
});
