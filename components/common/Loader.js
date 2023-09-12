import React from "react";
import { View, StyleSheet, ActivityIndicator, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const Loader = ({ color = "white" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -10,
    right: -10,
    bottom: -10,
    left: -10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
});

export default Loader;
