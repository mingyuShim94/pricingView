import * as React from "react";
import {
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import PricingView from "./pricingView";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(
          "Manrope",
          require("./assets/Manrope/static/Manrope-Bold.ttf")
        );
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  if (!appIsReady) {
    return null;
  }
  return <PricingView />;
}
