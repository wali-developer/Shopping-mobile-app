import React, { memo, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ModalWrapper from "../../common/Modal/ModalWrapper";
import DrageableWrapper from "../../common/Modal/DrageableWrapper";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/responsive/metrices";
import { colors } from "../../../theme/colors";
import textStyles from "../../../theme/styles";
import RadioButton from "../../common/RadioButton";
import PrimaryButton from "../../common/PrimaryButton";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("screen");

const FiltersModal = ({ show, onClose, onApplyFilter }) => {
  const navigation = useNavigation();
  const orders = [
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ];
  const prices = [
    { label: "Price High to Low", value: "hightolow" },
    { label: "Price Low to High", value: "lowtohigh" },
  ];
  const [selectedFilters, setSelectedFilters] = useState({
    order: orders[0],
    price: null,
  });

  const selectPrice = (price) => {
    setSelectedFilters((prev) => {
      return {
        ...prev,
        price: price,
      };
    });
  };

  return (
    <ModalWrapper visibility={show}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalContainer}
      >
        <DrageableWrapper onThresholdReached={onClose} modalOpenFlag={show}>
          <View style={styles.container}>
            <View style={{ ...styles.flexRow, justifyContent: "center" }}>
              <View style={styles.dragableShap}></View>
            </View>
            <View style={styles.contentWrapper}>
              <Text
                style={{
                  ...textStyles.textSemibold15,
                  textAlign: "center",
                }}
              >
                Sort By:
              </Text>

              {/* Order */}
              <View style={styles.orderWrapper}>
                <Text
                  style={{
                    ...textStyles.textMedium14,
                    marginBottom: horizontalScale(10),
                  }}
                >
                  Order
                </Text>
                <View style={styles.flexRow}>
                  {orders.map((order, index) => (
                    <TouchableOpacity
                      style={{
                        ...styles.orderText,
                        backgroundColor:
                          selectedFilters?.order?.value === order?.value
                            ? colors.primary
                            : colors.lightGray,
                      }}
                      key={index}
                      onPress={() => {
                        setSelectedFilters((prev) => {
                          return {
                            ...prev,
                            order: order,
                          };
                        });
                      }}
                    >
                      <Text
                        style={{
                          ...textStyles.textRegular12,
                          color:
                            selectedFilters?.order?.value === order?.value
                              ? colors.white
                              : colors.dark,
                        }}
                      >
                        {order?.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Price */}
              <View style={{ paddingTop: horizontalScale(17) }}>
                <Text
                  style={{
                    ...textStyles.textMedium14,
                    marginBottom: horizontalScale(10),
                  }}
                >
                  Price
                </Text>
                {prices.map((price, index) => (
                  <TouchableOpacity
                    style={{ ...styles.flexRow, ...styles.sortRow }}
                    key={index}
                    onPress={() => selectPrice(price)}
                  >
                    <Text style={textStyles.textRegular12}>{price.label}</Text>
                    <RadioButton
                      checked={selectedFilters?.price?.value === price?.value}
                      callback={() => selectPrice(price)}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <View
                style={{
                  marginTop: moderateScale(20),
                  marginBottom: moderateScale(10),
                  paddingHorizontal: horizontalScale(40),
                }}
              >
                <PrimaryButton
                  title="Apply"
                  style={{ height: moderateScale(43), backgroundColor: colors.primary }}
                  onPress={() => {
                    if (selectedFilters.price === null) {
                      Toast.show({
                        type: "error",
                        text2: "Please select the price",
                      });
                    } else {
                      onApplyFilter(selectedFilters);
                    }
                  }}
                />
              </View>
            </View>
          </View>
        </DrageableWrapper>
      </KeyboardAvoidingView>
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: width,
    height: height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  container: {
    width: width,
    paddingTop: verticalScale(8),
    paddingBottom: verticalScale(70),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    backgroundColor: colors.white,
  },
  dragableShap: {
    width: moderateScale(91),
    height: moderateScale(7),
    backgroundColor: colors.lightGray,
    borderRadius: moderateScale(10),
  },
  contentWrapper: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(25),
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  sortRow: {
    justifyContent: "space-between",
    marginBottom: horizontalScale(9),
  },
  orderWrapper: {
    paddingTop: horizontalScale(17),
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  orderText: {
    paddingHorizontal: horizontalScale(9),
    paddingVertical: verticalScale(5),
    // backgroundColor: colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(20),
    width: moderateScale(100),
    marginBottom: verticalScale(15),
    marginRight: horizontalScale(13),
  },
});

export default memo(FiltersModal);
