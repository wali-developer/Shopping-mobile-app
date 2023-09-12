import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { horizontalScale, moderateScale, verticalScale } from "./utils/responsive/metrices";
import { colors } from "./theme/colors";
import textStyles from "./theme/styles";
import { Feather, Fontisto } from "@expo/vector-icons";

// Screens
import GetStarted from "./screens/GetStarted";
import Shop from "./screens/Tabs/Shop";
import PurchasedProducts from "./screens/Tabs/PurchasedProducts";
import ProductDetails from "./screens/NormalStack/Shop/ProductDetails";
import Cart from "./screens/NormalStack/Shop/Cart";
import PurchasedProductDetails from "./screens/NormalStack/PurchasedProducts/PurchasedProductDetails";

const Stack = createNativeStackNavigator();
const NormalStack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

const NormalStackScreens = () => {
  return (
    <NormalStack.Navigator>
      <NormalStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
      <NormalStack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <NormalStack.Screen
        name="PurchasedProductDetails"
        component={PurchasedProductDetails}
        options={{ headerShown: false }}
      />
    </NormalStack.Navigator>
  );
};

const TabStackScreens = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShadowVisible: true,
        tabBarStyle: {
          position: "absolute",
          bottom: verticalScale(16),
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          height: moderateScale(50),
          shadowColor: "transparent",
          backgroundColor: "transparent",
          marginLeft: horizontalScale(30),
          marginRight: horizontalScale(30),
        },
      }}
    >
      <TabStack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: "Shop",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? colors.dark : colors.lightGray,
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: moderateScale(25),
                  borderBottomLeftRadius: moderateScale(25),
                  elevation: 3,
                  shadowColor: colors.dark,
                }}
              >
                <Feather
                  name="shopping-bag"
                  size={15}
                  color={focused ? colors.white : colors.dark}
                />
                <Text
                  style={{
                    ...textStyles.textMedium14,
                    color: focused ? colors.white : colors.dark,
                    marginLeft: horizontalScale(10),
                  }}
                >
                  Shop
                </Text>
              </View>
            );
          },
        }}
      />

      <TabStack.Screen
        name="PurchasedProducts"
        component={PurchasedProducts}
        options={{
          title: "Purchased",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? colors.dark : colors.lightGray,
                  width: "100%",
                  height: "100%",
                  borderTopRightRadius: moderateScale(25),
                  borderBottomRightRadius: moderateScale(25),
                  elevation: 3,
                  shadowColor: colors.dark,
                }}
              >
                <Fontisto
                  name="shopping-package"
                  size={15}
                  color={focused ? colors.white : colors.dark}
                />
                <Text
                  style={{
                    ...textStyles.textMedium14,
                    color: focused ? colors.white : colors.dark,
                    marginLeft: horizontalScale(10),
                  }}
                >
                  Purchased
                </Text>
              </View>
            );
          },
        }}
      />
    </TabStack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={TabStackScreens}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NormalStack"
            component={NormalStackScreens}
            options={{ headerShown: false }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
