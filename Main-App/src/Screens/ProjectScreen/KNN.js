import React, { Component } from "react";
import { StatusBar, View, Button, Icon } from "react-native";
import { Block, Text } from "expo-ui-kit";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ToCDScreen from "../HomeScreen/ToCDScreen.js";
import KNNModal from "./Modal/KNNModal.js";
import KNNMock from "./Mock/KNNMock.js";
import { ScrollView } from "react-native-gesture-handler";

export default class LearnPython extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            height: 70,
            paddingTop: 20,
            paddingLeft: 10,
            borderBottomWidth: 5,
            backgroundColor: "#ffa726",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="md-arrow-round-back"
            size={32}
            color="black"
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              fontWeight: "800",
              fontSize: 28,
              paddingLeft: 120,
              color: "white",
            }}
          >
            KNN
          </Text>
        </View>

        <View style={{ padding: 5 }}></View>
        <ScrollView>
          <KNNModal />
          <View style={{ padding: 40, paddingBottom: 100 }}>
            <KNNMock />
          </View>
        </ScrollView>
        <View>
          <Text>.</Text>
        </View>
      </View>
    );
  }
}
