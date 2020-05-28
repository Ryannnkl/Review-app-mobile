import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "../../Pages/Home";
import Tops from "../../Pages/Tops";
import Books from "../../Pages/Books";
import Profile from "../../Pages/Profile";

import { Icon } from "./Icons";

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" label="Inicio" color={tintColor} />
          ),
        },
      },
      Tops: {
        screen: Tops,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="bookmark" label="Tops" color={tintColor} />
          ),
        },
      },
      Books: {
        screen: Books,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="book" label="Livros" color={tintColor} />
          ),
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="user" label="Perfil" color={tintColor} />
          ),
        },
      },
    },
    {
      tabBarOptions: {
        activeTintColor: "#000",
        inactiveTintColor: "#AAA",

        style: {
          position: "absolute",
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: "#d3d3d3",
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: "#d3d3d3",
          height: 60,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
        showLabel: false,
      },
    }
  )
);
