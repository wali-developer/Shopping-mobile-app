import {
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  SafeAreaView,
  FlatList,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../../theme/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/responsive/metrices";
import ScreenTopHeader from "../../../components/common/ScreenTopHeader";
import CartItem from "../../../components/NormalStack/Cart/CartItem";
import textStyles, { iosShadow } from "../../../theme/styles";
import PrimaryButton from "../../../components/common/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { addMultiplePurchases } from "../../../redux/purchase.slice";
import Toast from "react-native-toast-message";
import { removeFromCart } from "../../../redux/cart.slice";

export default function Cart({ navigation }) {
  const dispatch = useDispatch();
  const CART = useSelector((state) => state?.cart);
  const purchasesProducts = useSelector((state) => state?.purchases);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSelectedItems(CART);
  }, []);

  // Get total price of selected item
  const getTotalPrice = () => {
    return selectedItems?.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  // Select and Select item for purchase
  const selectItemForPurchase = (item) => {
    const exist = selectedItems.find((prod) => prod?.id === item?.id);
    if (exist) {
      setSelectedItems(selectedItems.filter((prod) => prod?.id !== item?.id));
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  // Fucntion to Purchase the selected Products
  const purchaseProducts = () => {
    dispatch(addMultiplePurchases(selectedItems));

    CART.forEach((prod) => {
      let exist = selectedItems?.filter((item) => item.id === prod.id);
      if (exist?.length > 0) {
        dispatch(removeFromCart(exist[0]?.id));
      } else {
        return selectedItems;
      }
    });

    Toast.show({
      type: "success",
      text2: `You Purchased the Selected Products!`,
    });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScreenTopHeader navigation={navigation} title="Cart" />
        {CART.length > 0 ? (
          <>
            <View style={styles.itemsWrapper}>
              <FlatList
                data={CART}
                renderItem={({ item }) => (
                  <CartItem
                    item={item}
                    key={item?.id}
                    selectedItems={selectedItems}
                    toggleCheckbox={() => selectItemForPurchase(item)}
                  />
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: verticalScale(25) }}
              />
            </View>
            {/* Items Price and shipping details */}
            {selectedItems.length > 0 && (
              <View style={styles.bottomViewContainer}>
                <View style={[styles.flexRow, styles.priceRow]}>
                  <Text style={textStyles.textRegular14}>Selected Items</Text>
                  <Text
                    style={{ ...textStyles.textRegular14, color: colors.primary, opacity: 0.8 }}
                  >
                    ${parseFloat(getTotalPrice())?.toFixed(2)}
                  </Text>
                </View>
                <View style={[styles.flexRow, styles.priceRow]}>
                  <Text style={textStyles.textRegular14}>Shipping Fee</Text>
                  <Text
                    style={{ ...textStyles.textRegular14, color: colors.primary, opacity: 0.8 }}
                  >
                    $20.00
                  </Text>
                </View>
                <View style={styles.divider}></View>

                {/* Sub total */}
                <View
                  style={{ ...styles.flexRow, ...styles.priceRow, marginTop: verticalScale(30) }}
                >
                  <Text style={{ ...textStyles.textSemibold18, color: colors.dark }}>
                    Subtotal
                  </Text>
                  <Text
                    style={{ ...textStyles.textSemibold18, color: colors.primary, opacity: 0.8 }}
                  >
                    ${parseFloat(getTotalPrice() + 20)?.toFixed(2)}
                  </Text>
                </View>
                <PrimaryButton
                  title="Purchase Items"
                  style={{
                    marginTop: verticalScale(20),
                  }}
                  onPress={() => purchaseProducts()}
                />
              </View>
            )}
          </>
        ) : (
          <View style={styles.emptyCart}>
            <Text style={textStyles.textBold18}>Your cart is empty!</Text>
            <View style={styles.storeButton}>
              <PrimaryButton
                title="Go to Store"
                style={{ backgroundColor: colors.primary, height: moderateScale(45) }}
                onPress={() => {
                  navigation.navigate("Tabs", {
                    screen: "Shop",
                  });
                }}
              />
            </View>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.lightGray,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemsWrapper: {
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(15),
    height: moderateScale(420),
  },
  bottomViewContainer: {
    width: "100%",
    // height: `${moderateScale(37.5)}%`,
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(60),
    borderTopRightRadius: moderateScale(60),
    position: "absolute",
    bottom: 0,
    elevation: 5,
    paddingHorizontal: horizontalScale(40),
    paddingTop: verticalScale(45),
    paddingBottom: verticalScale(30),
    shadowColor: colors.dark,
    ...iosShadow,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  priceRow: {
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  divider: {
    width: "100%",
    borderWidth: 0.7,
    borderColor: colors.gray,
    marginVertical: verticalScale(10),
  },
  emptyCart: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(30),
    marginTop: verticalScale(50),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  storeButton: {
    marginTop: verticalScale(20),
    width: "100%",
    paddingHorizontal: horizontalScale(30),
  },
});
