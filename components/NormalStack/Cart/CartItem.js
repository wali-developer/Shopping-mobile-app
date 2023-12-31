import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo, useState } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/responsive/metrices";
import Checkbox from "../../common/Checkbox";
import textStyles from "../../../theme/styles";
import { colors } from "../../../theme/colors";
import QuantityIncDec from "../../common/QuantityIncDec";
import { Entypo } from "@expo/vector-icons";

const CartItem = (props) => {
  const { item, toggleCheckbox, CART, onRemoveItem } = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <View style={styles.prodImage}>
          <Image source={{ uri: item?.image }} style={styles.img} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.rightColumn}>
        <Text style={textStyles.textSemibold14}>{item?.title?.slice(1, 20) + ".."}</Text>
        <View style={styles.quantityRow}>
          <Text style={{ ...textStyles.textMedium14, color: colors.primary, opacity: 0.8 }}>
            ${item?.price}
          </Text>

          {/* Quantity */}
          <QuantityIncDec item={item} />
        </View>

        {/* Cross button */}
        <TouchableOpacity style={styles.cross} onPress={onRemoveItem}>
          <Entypo name="cross" size={18} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(CartItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: verticalScale(35),
  },
  leftColumn: {
    flexDirection: "row",
    alignItems: "center",
  },
  prodImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(15),
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  img: {
    width: "75%",
    height: "75%",
    // borderRadius: moderateScale(15),
  },
  rightColumn: {
    flex: 1,
    marginLeft: horizontalScale(25),
    paddingVertical: verticalScale(10),
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  quantityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cross: {
    position: "absolute",
    top: 8,
    right: 0,
  },
});
