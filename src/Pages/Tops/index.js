import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, ButtonExit, HorizontalScroll, Detail, Book, Title, SubTitle } from './styles';

export default function Tops({ navigation }) {
  
  return (
      <Container>
        <Detail />
        <ButtonExit onPress={() => navigation.navigate('Home') }>
          <FontAwesome5 name="arrow-left" size={24} color="#333"/>
        </ButtonExit>
        <View>
          <SubTitle></SubTitle>
          <Title></Title>
        </View>
        <HorizontalScroll>
          <Book source={require('../../../assets/hp1.jpg')}/>
          <Book source={require('../../../assets/ACDS.jpg')}/>
          <Book source={require('../../../assets/hp1.jpg')}/>
          <Book source={require('../../../assets/ACDS.jpg')}/>
        </HorizontalScroll>
      </Container>
  );
}
