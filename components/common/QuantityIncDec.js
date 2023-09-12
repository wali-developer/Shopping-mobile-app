import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/responsive/metrices";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";
import textStyles from "../../theme/styles";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../redux/cart.slice";

const QuantityIncDec = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  return (
    <>
      {/* Quantity */}
      <View style={styles.quantity}>
        <TouchableOpacity
          style={{ paddingHorizontal: horizontalScale(6) }}
          onPress={() => dispatch(decrementQuantity(item?.id))}
        >
          <MaterialCommunityIcons name="minus" size={12} color="black" />
        </TouchableOpacity>
        <Text style={styles.qtyText}>{item?.quantity}</Text>
        <TouchableOpacity
          style={{ paddingHorizontal: horizontalScale(6) }}
          onPress={() => dispatch(incrementQuantity(item?.id))}
        >
          <MaterialCommunityIcons name="plus" size={12} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default memo(QuantityIncDec);

const styles = StyleSheet.create({
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(2),
  },
  qtyText: {
    ...textStyles.textMedium13,
    color: colors.darkGray,
    paddingHorizontal: horizontalScale(2),
  },
});
