import React from "react";
import { Image, StyleSheet, View, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Block, Button, Text } from "expo-ui-kit";
import { LinearGradient } from "expo-linear-gradient";

// screens
import Home from "../Screens/HomeScreen/MainHomeScreen";
import Projects from "../Screens/ProjectScreen/ProjectsMainScreen";
import About from "../Screens/About";
import LearnPython from "../Screens/HomeScreen/LearnPython.js";
import LearnNumPy from "../Screens/HomeScreen/LearnNumPy.js";
import LearnPandas from "../Screens/HomeScreen/LearnPandas";
import LinearRegression from "../Screens/ProjectScreen/LinearRegression.js";
import KNN from "../Screens/ProjectScreen/KNN.js";
import MainContainerCD from "../Screens/HomeScreen/CompilerDocs/MainContainerCD.js";
import PythonOC from "../Screens/HomeScreen/CompilerDocs/PythonOC.js";
import GColab from "../Screens/HomeScreen/CompilerDocs/GColab.js";
import PDocs from "../Screens/HomeScreen/CompilerDocs/PDocs.js";
import NumPyDocs from "../Screens/HomeScreen/CompilerDocs/NumPyDocs.js";
import PandasDocs from "../Screens/HomeScreen/CompilerDocs/PandasDocs.js";
import ToCDScreen from "../Screens/HomeScreen/ToCDScreen.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerTitleAlign: "center",

          headerStyle: { backgroundColor: "#ffa726" },

          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={22}
                color="black"
                style={{ paddingHorizontal: 10 }}
              />
            </Button>
          ),
        }}
      >
        <Stack.Screen name="Home" headerTitle="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Projects" headerTitle="Projects">
          {(props) => <Projects {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="About"
          headerTitle="About"
          options={{
            headerRight: () => (
              <Button
                transparent
                onPress={() =>
                  Alert.alert(
                    "The MOCK created is free so mock data disappears after 24 Hours"
                  )
                }
              >
                <Feather
                  name="info"
                  size={18}
                  color="black"
                  style={{ paddingHorizontal: 10 }}
                />
              </Button>
            ),
          }}
        >
          {(props) => <About {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="LearnPython"
          component={LearnPython}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="LearnNumPy"
          component={LearnNumPy}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="LearnPandas"
          component={LearnPandas}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="LinearRegression"
          component={LinearRegression}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="KNN"
          component={KNN}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="MainContainerCD"
          component={MainContainerCD}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="PythonOC"
          component={PythonOC}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="GColab"
          component={GColab}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="PDocs"
          component={PDocs}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="NumPyDocs"
          component={NumPyDocs}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="PandasDocs"
          component={PandasDocs}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
        <Stack.Screen
          name="ToCDScreen"
          component={ToCDScreen}
          options={{
            headerTitle: null,
            headerTransparent: true,
            headerLeft: () => {
              <Button title="Go back" onPress={() => navigation.goBack()} />;
            },
          }}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <Block>
        <Block flex={0.4} margin={20} bottom top marginLeft={15}>
          <Image
            square
            style={{
              height: 100,
              width: 100,
              position: "absolute",
              alignSelf: "center",
              top: 50,
            }}
            source={require("./python_logo.png")}
          />

          <Text white title alignItems style={{ fontSize: 22 }}>
            Python-ML
          </Text>
        </Block>
        <Block>
          <DrawerItem
            label="Home"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate("Home")}
            icon={() => <AntDesign name="dashboard" color="white" size={16} />}
          />
          <DrawerItem
            label="Projects"
            labelStyle={{ color: "white", marginLeft: -16, fontSize: 22 }}
            style={{ alignItems: "flex-start", marginVertical: 0 }}
            onPress={() => props.navigation.navigate("Projects")}
            icon={() => <AntDesign name="linechart" color="white" size={16} />}
          />
        </Block>
      </Block>

      <Block flex={false}>
        <DrawerItem
          label="About"
          labelStyle={{ color: "white", marginLeft: -16 }}
          style={{ alignItems: "flex-start", marginVertical: 0 }}
          onPress={() => props.navigation.navigate("About")}
          icon={() => <AntDesign name="info" color="white" size={16} />}
        />
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#448AFF", "#9E9E9E", "#FFEB3B", "#FF5722"]}
    >
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "white",
          inactiveTintColor: "white",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
  },
  drawerStyles: { flex: 1, width: "50%", backgroundColor: "transparent" },
  drawerItem: { alignItems: "flex-start", marginVertical: 5 },
  drawerLabel: { color: "white", marginLeft: -16, fontSize: 22 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: "white",
    borderWidth: StyleSheet.hairlineWidth,
  },
});
