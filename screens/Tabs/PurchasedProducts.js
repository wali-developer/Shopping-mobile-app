import { StyleSheet, StatusBar, SafeAreaView, View, Text } from "react-native";
import { colors } from "../../theme/colors";
import textStyles from "../../theme/styles";
import { horizontalScale, moderateScale, verticalScale } from "../../utils/responsive/metrices";
import PurchasedProductsList from "../../components/Tabs/PurchasedProducts/PurchasedProductsList";
import { useSelector } from "react-redux";
import PrimaryButton from "../../components/common/PrimaryButton";

export default function PurchasedProducts(props) {
  const { navigation } = props;
  const purchasesProducts = useSelector((state) => state?.purchases);

  return (
    <>
      <SafeAreaView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headingRow}>
          <Text style={styles.heading}>Purchased Products</Text>
        </View>
        {purchasesProducts?.length > 0 ? (
          <PurchasedProductsList data={purchasesProducts} />
        ) : (
          <View style={styles.empty}>
            <Text style={textStyles.textBold18}>You haven't any purchases yet!</Text>
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
  headingRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalScale(20),
  },
  heading: {
    ...textStyles.textSemibold20,
    color: colors.dark,
    marginVertical: verticalScale(27),
  },
  empty: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(30),
    marginTop: verticalScale(50),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: horizontalScale(100),
  },
  storeButton: {
    marginTop: verticalScale(20),
    width: "100%",
    paddingHorizontal: horizontalScale(30),
  },
});
