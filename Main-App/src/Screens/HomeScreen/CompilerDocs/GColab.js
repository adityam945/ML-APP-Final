import * as React from "react";
import { WebView } from "react-native-webview";

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://colab.research.google.com/" }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
