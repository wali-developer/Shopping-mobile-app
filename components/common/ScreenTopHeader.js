import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { horizontalScale, moderateScale } from "../../utils/responsive/metrices";
import textStyles from "../../theme/styles";
import { colors } from "../../theme/colors";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function ScreenTopHeader({ navigation, title }) {
  const cart = useSelector((state) => state?.cart);
  return (
    <View style={styles.backBtnRow}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-backspace" size={25} color="black" />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity
        style={{ position: "relative" }}
        onPress={() => {
          navigation.navigate("NormalStack", {
            screen: "Cart",
          });
        }}
      >
        <Feather name="shopping-cart" size={21} color={colors.dark} />
        {cart.length > 0 ? <View style={styles.cartItemIndicator}></View> : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtnRow: {
    flexDirection: "row",
    paddingHorizontal: horizontalScale(20),
    marginTop: horizontalScale(15),
    alignItems: "center",
  },
  titleWrapper: {
    flex: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    ...textStyles.textMedium16,
    textAlign: "center",
    color: colors.dark,
  },

  cartItemIndicator: {
    width: moderateScale(8),
    height: moderateScale(8),
    backgroundColor: "red",
    borderRadius: moderateScale(8),
    position: "absolute",
    top: -1,
    right: -4,
    opacity: 0.9,
  },
});
