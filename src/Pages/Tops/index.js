import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, ButtonExit, HorizontalScroll, Detail, Book, Title, SubTitle } from './styles';

export default function Tops({ navigation }) {
  const [title,setTitle]=useState({
    title: "Harry potter",
    sub: "e a pedra filosofal"
  });
  
  function onScroll(event){
    console.log(event);
    if(event.nativeEvent.contentOffset.x === 0){
      setTitle({title: "Harry potter",sub: "e a pedra filosofal"})
    }
    else if(event.nativeEvent.contentOffset.x >= 41.5){
      setTitle({title: "A culpa é das estrelas",sub: "Jhon Grenn"})
    }
  }

  return (
      <Container>
        <Detail />
        <ButtonExit onPress={() => navigation.navigate('Home') }>
          <FontAwesome5 name="arrow-left" size={24} color="#333"/>
        </ButtonExit>
        <View style={{alignSelf: 'flex-start', marginHorizontal: 30, marginTop: 30, marginBottom: 10, }}>
          <SubTitle>{title.sub}</SubTitle>
          <Title>{title.title}</Title>
        </View> 
        <HorizontalScroll onScroll={onScroll}>
          <Book source={require('../../../assets/hp1.jpg')}/>
          <Book source={require('../../../assets/ACDS.jpg')}/>
          <Book source={require('../../../assets/hp1.jpg')}/>
          <Book source={require('../../../assets/ACDS.jpg')}/>
        </HorizontalScroll>
      </Container>
  );
}
