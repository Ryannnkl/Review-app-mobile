import React from "react";
import { View, Text, Button } from "react-native";

import { Container, Content, Input, ContentInput, Label } from "./styles";

export default function Register({ navigation }) {
  return (
    <Container>
      <Text>Teste</Text>
      <Button title="voltar" onPress={() => navigation.navigate("Login")} />
    </Container>
  );
}
