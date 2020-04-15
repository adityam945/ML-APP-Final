import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from "native-base";
export default function ProjectMainScreen({ navigation }) {
  return (
    <Container>
      <Container
        style={{ padding: 8, paddingTop: 20, backgroundColor: "#cfd8dc" }}
      >
        <Content>
          <Card style={{ borderRadius: 20, backgroundColor: "skyblue" }}>
            <CardItem
              header
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 8,
                backgroundColor: "skyblue",
              }}
            >
              <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                Linear Regression
              </Text>
            </CardItem>
            <CardItem style={{ backgroundColor: "skyblue" }}>
              <Body>
                <Text>Project done on Boston Dataset</Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => navigation.navigate("LinearRegression")}
              bordered
              style={{
                backgroundColor: "skyblue",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
            >
              <Text>View</Text>
            </CardItem>
          </Card>

          <Card style={{ borderRadius: 28 }}>
            <CardItem
              header
              style={{
                backgroundColor: "#9fa8da",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 8,
              }}
            >
              <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                K Nearest Number
              </Text>
            </CardItem>
            <CardItem style={{ backgroundColor: "#9fa8da" }}>
              <Body>
                <Text>Project done on Wine recognition dataset</Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              onPress={() => navigation.navigate("KNN")}
              bordered
              style={{
                backgroundColor: "#9fa8da",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
            >
              <Text>View</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </Container>
  );
}
