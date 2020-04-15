import React, { Component } from "react";
import { StatusBar, View, Button, Icon } from "react-native";
import { Block, Text } from "expo-ui-kit";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ToCDScreen from "./ToCDScreen.js";
import NumPYMock from "./Mock/NumPyMock.js";
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
            NumPY
          </Text>
        </View>

        <ScrollView>
          <View style={{ padding: 40, paddingBottom: 100 }}>
            <NumPYMock />
          </View>
        </ScrollView>

        <View style={{ padding: 40 }}></View>
      </View>
    );
  }
}
