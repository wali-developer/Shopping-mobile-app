import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../../theme/colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../utils/responsive/metrices";
import textStyles from "../../../theme/styles";
import ProductRating from "../../../components/common/ProductRating";
import PrimaryButton from "../../../components/common/PrimaryButton";
import API from "../../../utils/api";
import Loader from "../../../components/common/Loader";
import ScreenTopHeader from "../../../components/common/ScreenTopHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { returnProduct } from "../../../redux/purchase.slice";
import Toast from "react-native-toast-message";

let { width, height } = Dimensions.get("screen");

const Title = () => {
  return <Text styles={{ ...styles.title, color: colors.white }}>Product</Text>;
};

export default function PurchasedProductDetails({ route, navigation }) {
  const purchasesProducts = useSelector((state) => state?.purchases);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = route.params;

  useEffect(() => {
    const product = purchasesProducts?.filter((prod) => prod?.id === id);
    setProductDetails(product[0]);
    setQuantity(product[0].quantity);
  }, [id]);

  return (
    <>
      <ScrollView style={{ position: "relative" }}>
        <View style={styles.imageWrapper}>
          <ImageBackground
            source={{ uri: productDetails?.image }}
            style={{
              width: "100%",
              height: "100%",
              marginTop: verticalScale(25),
            }}
            resizeMode="contain"
          ></ImageBackground>
          <View style={styles.backBtnRow}>
            <ScreenTopHeader navigation={navigation} title="Product" />
          </View>
        </View>

        {/* Product details content */}
        <View style={styles.contentContainer}>
          <View style={styles.upperRow}>
            <View>
              <Text style={{ ...textStyles.textSemibold22, color: colors.primary }}>
                ${productDetails?.price}
              </Text>
              <Text style={{ ...textStyles.textMedium13, color: colors.dark }}>
                {productDetails?.title}
              </Text>
            </View>

            <ProductRating />
          </View>

          <View style={{ paddingTop: verticalScale(20) }}>
            <Text style={{ ...textStyles.textSemibold13, color: colors.dark }}>Description</Text>
            <Text style={styles.descText}>{productDetails?.description}</Text>
          </View>
          <View style={{ paddingTop: verticalScale(20) }}>
            <Text style={{ ...textStyles.textSemibold13, color: colors.dark }}>
              Purchse History
            </Text>
            <View style={styles.purchaseRow}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.text12bold}>Order No:</Text>
                <Text style={styles.descText}>{productDetails?.orderNo}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.text12bold}>Date:</Text>
                <Text style={styles.descText}>{productDetails?.date}</Text>
              </View>
            </View>
          </View>
          <View style={styles.quantityRow}>
            <Text style={styles.qtyText}>Quantity</Text>

            {/* Quantity */}
            <QuantityIncDec quantity={quantity} setQuantity={setQuantity} />
          </View>
        </View>
        {/* Add to Cart */}
        <View
          style={{
            paddingHorizontal: horizontalScale(25),
            marginBottom: horizontalScale(20),
          }}
        >
          <PrimaryButton
            title="Return Item"
            style={{
              marginTop: verticalScale(30),
            }}
            onPress={() => {
              dispatch(returnProduct(productDetails?.id));
              Toast.show({
                type: "success",
                text2: `Product successfully returned!`,
              });
              navigation.navigate("Tabs", {
                screen: "PurchasedProducts",
              });
            }}
          />
        </View>
      </ScrollView>
      {isLoading && <Loader />}
    </>
  );
}

const QuantityIncDec = ({ quantity, setQuantity }) => {
  return (
    <View style={styles.quantity}>
      <TouchableOpacity
        style={{ paddingHorizontal: horizontalScale(6) }}
        onPress={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        <MaterialCommunityIcons name="minus" size={12} color="black" />
      </TouchableOpacity>
      <Text style={styles.qtyText}>{quantity}</Text>
      <TouchableOpacity
        style={{ paddingHorizontal: horizontalScale(6) }}
        onPress={() => setQuantity((prev) => prev + 1)}
      >
        <MaterialCommunityIcons name="plus" size={12} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.lightGray,
    marginTop: StatusBar.currentHeight || 0,
  },
  backBtnRow: {
    width: width,
    marginTop: horizontalScale(40),
    position: "absolute",
    top: 0,
  },
  imageWrapper: {
    width: "100%",
    height: height / 2,
    borderBottomLeftRadius: moderateScale(45),
    borderBottomRightRadius: moderateScale(45),
    overflow: "hidden",
    paddingHorizontal: horizontalScale(68),
    paddingVertical: verticalScale(68),
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingHorizontal: horizontalScale(20),
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingTop: verticalScale(25),
    flexWrap: "wrap",
  },
  descText: {
    ...textStyles.textRegular12,
    color: colors.darkGray,
    marginTop: verticalScale(6),
    lineHeight: moderateScale(19),
  },
  purchaseRow: {
    marginTop: horizontalScale(7),
  },
  text12bold: {
    ...textStyles.textMedium12,
    color: colors.dark,
    marginRight: horizontalScale(13),
    width: moderateScale(100),
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(15),
  },
  qtyText: {
    ...textStyles.textMedium14,
    color: colors.dark,
    width: moderateScale(112),
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: moderateScale(15),
    paddingVertical: verticalScale(2),
    marginLeft: horizontalScale(40),
  },
  qtyText: {
    ...textStyles.textMedium13,
    color: colors.darkGray,
    paddingHorizontal: horizontalScale(2),
  },
});
