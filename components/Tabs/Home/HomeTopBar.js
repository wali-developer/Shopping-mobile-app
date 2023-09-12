import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/responsive/metrices";
import { colors } from "../../../theme/colors";
import textStyles, { iosShadow } from "../../../theme/styles";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const HomeTopBar = ({ navigation, search, onSearch }) => {
  const cart = useSelector((state) => state?.cart);
  return (
    <View style={styles.container}>
      <View style={styles.rowWrapper}>
        <View style={styles.searchWrapper}>
          <Feather name="search" size={20} color="black" />
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.gray}
            style={styles.input}
            value={search}
            onChangeText={(text) => onSearch(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.cartWarpper}
          onPress={() =>
            navigation.navigate("NormalStack", {
              screen: "Cart",
            })
          }
        >
          <View style={{ position: "relative" }}>
            <Feather name="shopping-cart" size={22} color={colors.dark} />
            {cart.length > 0 ? <View style={styles.cartItemIndicator}></View> : null}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(15),
  },
  rowWrapper: {
    display: "flex",
    flexDirection: "row",
    height: moderateScale(46),
    alignItems: "center",
    paddingHorizontal: horizontalScale(20),
  },

  searchWrapper: {
    flexGrow: 1,
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: horizontalScale(15),
    ...iosShadow,
    elevation: 5,
    shadowColor: colors.gray,
    height: "100%",
    marginRight: horizontalScale(14),
  },
  input: {
    flexGrow: 1,
    marginLeft: horizontalScale(13),
    color: colors.dark,
    ...textStyles.textRegular14,
    borderWidth: 0,
    height: "100%",
  },
  cartWarpper: {
    width: moderateScale(46),
    height: "100%",
    borderRadius: moderateScale(12),
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
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

export default memo(HomeTopBar);
