import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { moderateScale } from "../../utils/responsive/metrices";
import { colors } from "../../theme/colors";
import { Octicons } from "@expo/vector-icons";

export default function Checkbox({ checked = false, toggleCheckbox }) {
  return (
    <>
      <TouchableOpacity
        style={{ ...styles.container, borderColor: checked ? colors.primary : colors.dark }}
        onPress={toggleCheckbox}
      >
        {checked && <Octicons name="check" size={12} color={colors.primary} />}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: moderateScale(17),
    height: moderateScale(17),
    borderRadius: moderateScale(4),
    borderWidth: 2,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});
