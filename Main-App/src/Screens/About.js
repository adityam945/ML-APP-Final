import React from "react";
import { Block, Text } from "expo-ui-kit";
import { StatusBar, View, Button } from "react-native";
import { Linking } from "react-native";

export default function Contact({ style, navigation }) {
  return (
    <View style={{ padding: 20, backgroundColor: "#cfd8dc" }}>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
        This App is made using React-native(JS){" "}
      </Text>

      <Text>
        All the content or static Data displayed is not loaded by HardCode
        data(Apart from this page)
      </Text>
      <Text></Text>
      <Text>
        The data is being loaded using Mocks and API from backend using an URL
      </Text>
      <Text>
        As the MOCK used is a free version the static data loaded from it
        disappears after 24Hours but the data from API stands.{" "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ paddingTop: 30, fontWeight: "bold" }}>Main Editor:</Text>
        <Text style={{ paddingTop: 30 }}>Aditya M </Text>
      </View>

      <Text>E-mail: adityam945@gmail.com</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>GitHub: </Text>
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("https://github.com/adityam945")}
        >
          GitHub
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ paddingTop: 30, fontWeight: "bold" }}>
          Other Editor:
        </Text>
        <Text style={{ paddingTop: 30 }}>Karthik GPN </Text>
      </View>

      <Text>E-mail: karthikgiriyapura1999@gmail.com</Text>
      <View style={{ flexDirection: "row" }}></View>
      <View style={{ paddingBottom: 500 }}></View>
    </View>
  );
}
