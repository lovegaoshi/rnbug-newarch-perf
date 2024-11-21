import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";
import MotionLayout from "./motionlayout/View";
import FpsCounter from "../components/fpsCounter";
import { View, FlatList, ScrollView, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const D = () => (
  <View>
    <View style={{ height: 100, backgroundColor: "red" }}></View>
    <View style={{ height: 1, backgroundColor: "white" }}></View>
  </View>
);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FpsCounter visible={true} />
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <FlatList
            data={Array.from(Array(100).keys())}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
          <FlatList
            data={Array.from(Array(100).keys())}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
          <FlatList
            data={Array.from(Array(100).keys())}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
          <FlatList
            data={Array.from(Array(100).keys())}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
          <FlatList
            data={Array.from(Array(100).keys())}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
          <FlatList
            data={Array.from(Array(100).keys())}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
          <FlatList
            data={Array.from(Array(100).keys())}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
          <FlatList
            data={Array.from(Array(100).keys())}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
        </View>
        <MotionLayout />
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
