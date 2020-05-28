import React from "react";
import { StatusBar, Alert, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  Container,
  Opacity,
  Content,
  Input,
  InputBar,
  IconInput,
  Button,
  ButtonText,
  Forgot,
  Arrow,
  RegisterText,
  RegisterContent,
} from "./styles";

export default function Login({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Container>
        <Opacity />
        <FontAwesome5 name="book" size={60} color="#FFF" />
        <Content>
          <InputBar>
            <IconInput>
              <FontAwesome5 name="user" size={20} color="#FFF" />
            </IconInput>
            <Input placeholder="usuario" />
          </InputBar>
          <InputBar>
            <IconInput>
              <FontAwesome5 name="key" size={20} color="#FFF" />
            </IconInput>
            <Input placeholder="senha" />
          </InputBar>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Forgot>Esqueceu sua Senha?</Forgot>
            <Button onPress={() => navigation.navigate("Tabs")}>
              <ButtonText>enviar</ButtonText>
            </Button>
          </View>
        </Content>
        <RegisterContent>
          <RegisterText onPress={() => navigation.navigate("Register")}>
            Registrar-se
          </RegisterText>
          <Arrow onPress={() => navigation.navigate("Register")}>
            <FontAwesome5 name="arrow-right" size={24} color="#fff" />
          </Arrow>
        </RegisterContent>
      </Container>
    </>
  );
}
