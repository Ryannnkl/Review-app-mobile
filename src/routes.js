import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Tabs from "./components/Tabs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
    Tabs,
  })
);
