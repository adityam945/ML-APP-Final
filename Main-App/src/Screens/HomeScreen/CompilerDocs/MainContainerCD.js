import React from "react";
import { StatusBar, View, Button } from "react-native";
import { Block, Text } from "expo-ui-kit";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Icon,
  Right,
} from "native-base";

export default function MainContainerCD({ style, navigation }) {
  return (
    <Container>
      <View
        style={{
          height: 70,
          paddingTop: 20,
          paddingLeft: 10,
          borderBottomWidth: 5,
          backgroundColor: "#ffa726",
          flexDirection: "row",
          textAlign: "center",
        }}
      >
        <Ionicons
          name="md-arrow-round-back"
          size={32}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontWeight: "800", fontSize: 28, paddingLeft: 65 }}>
          Editors and Docs
        </Text>
      </View>
      <Container>
        <Content style={{ padding: 4 }}>
          <Card>
            <CardItem
              button
              onPress={() => navigation.navigate("PythonOC")}
              style={{ backgroundColor: "#8d6e63" }}
            >
              <Icon active name="logo-python" size={30} />
              <Text>Python Online Compiler</Text>
              <Right>
                <Icon name="arrow-forward" size={30} />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => navigation.navigate("GColab")}
              style={{ backgroundColor: "#8d6e63" }}
            >
              <Icon active name="logo-google" size={30} />
              <Text>Google Colab NootBook</Text>
              <Right>
                <Icon name="arrow-forward" size={30} />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => navigation.navigate("PDocs")}
              style={{ backgroundColor: "#8d6e63" }}
            >
              <Icon active name="logo-python" size={30} />
              <Text>Python Offlicial Docs</Text>
              <Right>
                <Icon name="arrow-forward" size={30} />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => navigation.navigate("NumPyDocs")}
              style={{ backgroundColor: "#8d6e63" }}
            >
              <Icon active name="md-today" size={30} />
              <Text>NumPy Docs(Offlicial)</Text>
              <Right>
                <Icon name="arrow-forward" size={30} />
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => navigation.navigate("PandasDocs")}
              style={{ backgroundColor: "#8d6e63" }}
            >
              <Icon active name="md-today" size={30} />
              <Text>Pandas Docs(Offlicial)</Text>
              <Right>
                <Icon name="arrow-forward" size={30} />
              </Right>
            </CardItem>
          </Card>
          <View style={{ borderWidth: 2 }}>
            <Text style={{ fontWeight: "bold", padding: 10 }}>
              All these pops Web View (to return press back)
            </Text>
          </View>
        </Content>
      </Container>
    </Container>
  );
}
