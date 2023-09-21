import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { setCustomText } from "react-native-global-props";
import "react-native-gesture-handler";
import { TapContext } from "./src/useContext/Context";
import { useState } from "react";
import TabRouter from "./src/Router/Router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./src/assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto/Roboto-Light.ttf"),
    "NotoSansKR-Black": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Black.otf"),
    "NotoSansKR-Bold": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Bold.otf"),
    "NotoSansKR-Medium": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Medium.otf"),
    "NotoSansKR-Regular": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Regular.otf"),
    "NotoSansKR-Light": require("./src/assets/fonts/NotoSansKR/NotoSansKR-Light.otf"),
  });

  const customTextProps = {
    style: {
      fontFamily: "NotoSansKR-Medium",
    },
  };
  setCustomText(customTextProps);

  const [moveTapState, setMoveTapState] = useState("Home");
  
  if (!fontsLoaded) {
    return <StatusBar />;
  }
  return (
    <TapContext.Provider value={{ moveTapState, setMoveTapState }}>
      <TabRouter />
    </TapContext.Provider>
  );
}
