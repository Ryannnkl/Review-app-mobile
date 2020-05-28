import React, { useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  Container,
  Content,
  Photo,
  Label,
  Count,
  CountLabel,
  Indexs,
  Name,
  Locale,
  Scroll,
  Info,
  Title,
  HorizontalScroll,
  BioText,
  Head,
  Card,
  Exit,
  ExitText,
  Help,
  TextHelp,
} from "./styles";

export default function Profile({ navigation }) {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      {/* <PopoverView stateVisible={visible} text="deseja realmente sair?"/> */}
      <Photo />

      <Content>
        <Head>
          <Name>Rowena Ravenclaw</Name>
          <Locale>PE, Bom Conselho</Locale>
        </Head>

        <Indexs>
          <Label>
            <Count>9</Count>
            <CountLabel>Livros lidos</CountLabel>
          </Label>
          <Label>
            <Count>354</Count>
            <CountLabel>Seguindo</CountLabel>
          </Label>
          <Label>
            <Count>957</Count>
            <CountLabel>Seguidores</CountLabel>
          </Label>
        </Indexs>
      </Content>

      <Scroll>
        <Info>
          <Title>Bio</Title>
          <BioText>
            1960s with the release of Lastse sheets containing Lorem ipsom pages
          </BioText>
        </Info>
        <Info style={{ marginHorizontal: null, zIndex: 5 }}>
          <Title>Favoritos</Title>
          <HorizontalScroll>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </HorizontalScroll>
        </Info>
        <Info>
          <Title>Ajuda</Title>
          <Help onPress={() => navigation.navigate()}>
            <FontAwesome5 name="info-circle" size={24} color="#999" />
            <TextHelp>termos de privacidade</TextHelp>
          </Help>
          <Help>
            <FontAwesome5 name="info-circle" size={24} color="#999" />
            <TextHelp>sobre</TextHelp>
          </Help>
          <Help>
            <FontAwesome5 name="info-circle" size={24} color="#999" />
            <TextHelp>fale comigo</TextHelp>
          </Help>
        </Info>
        <Info>
          <Title>Conta</Title>
          <Exit onPress={() => navigation.navigate("Login")}>
            <ExitText>sair</ExitText>
          </Exit>
        </Info>
      </Scroll>
    </Container>
  );
}
