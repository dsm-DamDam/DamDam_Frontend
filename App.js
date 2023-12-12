import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { setCustomText } from "react-native-global-props";
import LoginRouter from "./src/Router/LoginRouter";
import { TapContext, UserContext } from "./src/useContext/Context";
import { Text } from "react-native";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
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
    setIsReady(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  useEffect(() => {
    if (isReady) {
      const customTextProps = {
        style: {
          fontFamily: "NotoSansKR-Medium",
        },
      };
      setCustomText(customTextProps);
    }
  }, [isReady]);

  const [moveTapState, setMoveTapState] = useState("Home");
  const [userInfo, setUserInfo] = useState({
    nickname: "테스트",
    userId: "test",
    email: "aodtn323@dsm.hs.kr",
    password: "qwertyuiop!!",
  });

  if (!isReady) {
    return (
      <>
        <StatusBar style="auto" />
        <Text>로딩중</Text>
      </>
    );
  }
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <TapContext.Provider value={{ moveTapState, setMoveTapState }}>
        <LoginRouter />
      </TapContext.Provider>
    </UserContext.Provider>
  );
}
