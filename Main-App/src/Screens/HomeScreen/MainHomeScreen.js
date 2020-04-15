import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Right,
  Icon,
  Left,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function MainHomeScreen({ navigation }) {
  return (
    <Container
      style={{ paddingTop: 20, padding: 10, backgroundColor: "#cfd8dc" }}
    >
      <Content>
        <Card style={{ borderRadius: 20, backgroundColor: "#81d4fa" }}>
          <CardItem
            button
            onPress={() => navigation.navigate("MainContainerCD")}
            style={{
              backgroundColor: "#81d4fa",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 8,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <Left>
              <Ionicons name="logo-python" size={30} />
            </Left>

            <Text style={{ fontSize: 18 }}>
              Python Compiler and Official Docs
            </Text>

            <Right>
              <Ionicons name="md-arrow-round-forward" size={22} />
            </Right>
          </CardItem>
        </Card>
        <Card style={{ borderRadius: 20, backgroundColor: "#66bb6a" }}>
          <CardItem
            header
            style={{
              backgroundColor: "#66bb6a",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 8,
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>PYTHON</Text>
          </CardItem>
          <CardItem style={{ backgroundColor: "#66bb6a" }}>
            <Body>
              <Text>An Intro to Python Basics</Text>
            </Body>
          </CardItem>
          <CardItem
            footer
            button
            onPress={() => navigation.navigate("LearnPython")}
            bordered
            style={{
              backgroundColor: "#66bb6a",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <Text>Learn</Text>
          </CardItem>
        </Card>

        <Card style={{ borderRadius: 20, backgroundColor: "skyblue" }}>
          <CardItem
            header
            style={{
              backgroundColor: "#ffeb3b",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 8,
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>NumPy</Text>
          </CardItem>
          <CardItem style={{ backgroundColor: "#ffeb3b" }}>
            <Body>
              <Text>An Intro to NumPy Basics</Text>
            </Body>
          </CardItem>
          <CardItem
            footer
            button
            onPress={() => navigation.navigate("LearnNumPy")}
            bordered
            style={{
              backgroundColor: "#ffeb3b",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <Text>Learn</Text>
          </CardItem>
        </Card>

        <Card style={{ borderRadius: 20, backgroundColor: "skyblue" }}>
          <CardItem
            header
            style={{
              backgroundColor: "#ef5350",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 8,
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>Pandas</Text>
          </CardItem>
          <CardItem style={{ backgroundColor: "#ef5350" }}>
            <Body>
              <Text>An Intro to Pandas Basics</Text>
            </Body>
          </CardItem>
          <CardItem
            footer
            button
            onPress={() => navigation.navigate("LearnPandas")}
            bordered
            style={{
              backgroundColor: "#ef5350",
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <Text>Learn</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
