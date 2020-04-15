import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from "./src/Drawer/Drawer.js";

export default () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};
