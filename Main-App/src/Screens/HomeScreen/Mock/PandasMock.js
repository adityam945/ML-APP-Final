import React, { Component } from "react";
import { View, Text } from "react-native";

class PythonMock extends Component {
  state = {
    data: "",
  };
  componentDidMount = () => {
    fetch("https://demo8376838.mockable.io/Pandas", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={{ paddingBottom: 40 }}>
        <Text style={{ fontSize: 16 }}>{this.state.data.body}</Text>
      </View>
    );
  }
}
export default PythonMock;
