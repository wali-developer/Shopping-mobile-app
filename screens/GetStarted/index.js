import { Image, StyleSheet, Text, View } from "react-native";
import React, { version } from "react";
import mImages from "../../assets/images";
import textStyles from "../../theme/styles";
import { colors } from "../../theme/colors";
import { horizontalScale, verticalScale } from "../../utils/responsive/metrices";
import PrimaryButton from "../../components/common/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

export default function GetStarted() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image source={mImages.logo} style={{ width: 178, height: 178 }} />
        <Text
          style={{
            ...textStyles.textSemibold34,
            color: colors.primary,
            marginTop: verticalScale(20),
          }}
        >
          Shopping Mart
        </Text>
      </View>
      <PrimaryButton
        title="Get Started"
        style={{ backgroundColor: colors.primary }}
        onPress={() =>
          navigation.navigate("Tabs", {
            screen: "Shop",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: horizontalScale(25),
  },
});
