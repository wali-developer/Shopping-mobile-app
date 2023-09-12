import fonts from "./fonts";
import { Platform, StyleSheet } from "react-native";
import { moderateScale } from "../utils/responsive/metrices";

const textStyles = StyleSheet.create({
  textSemibold34: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(34),
    includeFontPadding: false,
  },
  textMedium24: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(24),
    includeFontPadding: false,
  },
  textMedium20: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(20),
    includeFontPadding: false,
  },
  textSemibold20: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(20),
    includeFontPadding: false,
  },
  textSemibold22: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(22),
    includeFontPadding: false,
  },
  textSemibold18: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(18),
    includeFontPadding: false,
  },
  textSemibold17: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(17),
    includeFontPadding: false,
  },
  textSemibold16: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(16),
    includeFontPadding: false,
  },
  textSemibold15: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(15),
    includeFontPadding: false,
  },
  textSemibold14: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(14),
    includeFontPadding: false,
  },
  textSemibold11: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(11),
    includeFontPadding: false,
  },
  textSemibold13: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(13),
    includeFontPadding: false,
  },
  textRegular13: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(13),
    includeFontPadding: false,
  },
  textRegular18: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(18),
    includeFontPadding: false,
  },
  textRegular17: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(17),
    includeFontPadding: false,
  },
  textRegular16: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(16),
    includeFontPadding: false,
  },
  textRegular15: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(15),
    includeFontPadding: false,
  },
  textRegular14: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(14),
    includeFontPadding: false,
  },
  textRegular12: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(12),
    includeFontPadding: false,
  },
  textSemibold12: {
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: moderateScale(12),
    includeFontPadding: false,
  },
  textMedium12: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(12),
    includeFontPadding: false,
  },
  textBold18: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(18),
    includeFontPadding: false,
  },
  textBold17: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(17),
    includeFontPadding: false,
  },
  textBold16: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(16),
    includeFontPadding: false,
  },
  textBold15: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(15),
    includeFontPadding: false,
  },
  textBold14: {
    fontFamily: fonts.PoppinsBold,
    fontSize: moderateScale(14),
    includeFontPadding: false,
  },
  textMedium18: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(18),
    includeFontPadding: false,
  },
  textMedium17: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(17),
    includeFontPadding: false,
  },
  textMedium16: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(16),
    includeFontPadding: false,
  },
  textMedium15: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(15),
    includeFontPadding: false,
  },
  textMedium14: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(14),
    includeFontPadding: false,
  },
  textMedium13: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(13),
    includeFontPadding: false,
  },
  textMedium11: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: moderateScale(11),
    includeFontPadding: false,
  },
  textThin18: {
    fontFamily: fonts.PoppinsThin,
    fontSize: moderateScale(18),
    includeFontPadding: false,
  },
  textThin17: {
    fontFamily: fonts.PoppinsThin,
    fontSize: moderateScale(17),
    includeFontPadding: false,
  },
  textThin16: {
    fontFamily: fonts.PoppinsThin,
    fontSize: moderateScale(16),
    includeFontPadding: false,
  },
  textThin15: {
    fontFamily: fonts.PoppinsThin,
    fontSize: moderateScale(15),
    includeFontPadding: false,
  },
  textThin14: {
    fontFamily: fonts.PoppinsThin,
    fontSize: moderateScale(14),
    includeFontPadding: false,
  },
  textRegular10: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: moderateScale(10),
    includeFontPadding: false,
  },
});

export const iosShadow =
  Platform.OS == "ios"
    ? {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.6,
        elevation: 3,
      }
    : {};

export default textStyles;
