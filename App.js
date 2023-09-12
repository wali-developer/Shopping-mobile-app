import Routes from "./Routes";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./redux/store";

let persistor = persistStore(store);

export default function App() {
  const [loaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsThin: require("./assets/fonts/Poppins-Thin.ttf"),
  });

  if (!loaded) {
    return <StatusBar style="dark" translucent />;
  }

  return (
    <>
      <StatusBar style="dark" translucent />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
      <Toast />
    </>
  );
}
