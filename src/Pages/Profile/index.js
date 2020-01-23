import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { 
  Container, Content, Photo, Label ,Count, CountLabel, Indexs, Name, Locale, Scroll, Info, Title, HorizontalScroll, BioText,
  Head, Card
} from './styles';

export default function Profile() {
  return (
    <Container>
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
          <BioText>1960s with the release of Lastse sheets containing Lorem ipsom pages</BioText>
        </Info>
        <Info>
          <Title>Favoritos</Title>
          <HorizontalScroll>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </HorizontalScroll>
        </Info>
      </Scroll>
    </Container>
  );
}
