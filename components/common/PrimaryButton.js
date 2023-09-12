import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { horizontalScale, moderateScale } from "../../utils/responsive/metrices";
import textStyles from "../../theme/styles";

export default function PrimaryButton({ title, icon, onPress, style }) {
  return (
    <TouchableOpacity style={{ ...styles.buttonWrapper, ...style }} onPress={onPress}>
      {icon}
      <Text
        style={{
          ...textStyles.textMedium14,
          color: colors.white,
          marginLeft: horizontalScale(5),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "100%",
    borderRadius: moderateScale(30),
    backgroundColor: colors.dark,
    height: moderateScale(50),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
