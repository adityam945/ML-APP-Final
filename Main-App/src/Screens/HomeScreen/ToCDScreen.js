import React, { Component } from "react";
import { StatusBar, View, Button, Icon } from "react-native";
import { Block, Text } from "expo-ui-kit";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default class ToCDScreen extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#ffea00",
          height: 40,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Official Docs or Editor -->>
        </Text>
        <View style={{ paddingLeft: 70 }}>
          <Button
            title="Lets Code"
            onPress={() => this.props.navigation.navigate("MainContainerCD")}
          />
        </View>
      </View>
    );
  }
}
