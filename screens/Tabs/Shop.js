import { StyleSheet, StatusBar, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import textStyles from "../../theme/styles";
import HomeTopBar from "../../components/Tabs/Home/HomeTopBar";
import ProductsList from "../../components/Tabs/Home/ProductsList";
import { horizontalScale, verticalScale } from "../../utils/responsive/metrices";
import { Feather } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import FiltersModal from "../../components/Tabs/Home/FiltersModal";
import API from "../../utils/api";
import Loader from "../../components/common/Loader";
import { useSelector } from "react-redux";

export default function Shop(props) {
  const { navigation } = props;
  const [isModalVisible, setModalVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [productsBackup, setProductsBackup] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    order: null,
    price: null,
  });

  const loadProductsList = () => {
    setIsLoading(true);
    API.get(`/products?limit=12&sort=${filters?.order}`)
      .then((response) => {
        setIsLoading(false);
        if (Array.isArray(response?.data)) {
          setProductsList(response?.data);
          setProductsBackup(response?.data);
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  // Load products on change navigation
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadProductsList();
    });
    return unsubscribe;
  }, [navigation]);

  // Search products
  useEffect(() => {
    if (filters.search === "") {
      setProductsList(productsBackup);
    } else {
      let filtersProducts = productsList.filter((product) => {
        return product.title.toLowerCase().includes(filters.search.toLowerCase());
      });
      setProductsList(filtersProducts);
    }
  }, [filters.search]);

  // Sort products based on price
  useEffect(() => {
    let sortedProducts = [...productsList];

    if (filters?.price === "lowtohigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filters?.price === "hightolow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProductsList(sortedProducts);
  }, [filters.price]);

  return (
    <>
      <SafeAreaView style={styles.container} showsVerticalScrollIndicator={false}>
        <HomeTopBar
          navigation={navigation}
          search={filters.search}
          onSearch={(data) => {
            setFilters((prev) => {
              return {
                ...prev,
                search: data,
              };
            });
          }}
        />
        <View style={styles.headingRow}>
          <Text style={styles.heading}>Explore</Text>
          {productsList?.length > 0 && (
            <TouchableOpacity onPress={() => setModalVisibility(true)}>
              <Feather name="filter" size={23} color={colors.dark} />
            </TouchableOpacity>
          )}
        </View>
        {productsList?.length > 0 ? (
          <ProductsList data={productsList} />
        ) : (
          <View
            style={{
              marginTop: verticalScale(50),
            }}
          >
            <Text style={{ ...textStyles.textSemibold16, textAlign: "center" }}>
              No product found!
            </Text>
          </View>
        )}
      </SafeAreaView>

      {/* Sort Products modal */}
      {isModalVisible && (
        <FiltersModal
          show={isModalVisible}
          onClose={setModalVisibility}
          onApplyFilter={(selectedFilters) => {
            setFilters((prev) => {
              return {
                ...prev,
                order: selectedFilters?.order.value,
                price: selectedFilters?.price?.value,
              };
            });
            setModalVisibility(false);
          }}
        />
      )}
      {isLoading && <Loader />}
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
    ...textStyles.textSemibold22,
    color: colors.dark,
    marginVertical: verticalScale(27),
  },
});
