import React from 'react';
import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Content, Label } from './styles';

export function Icon({ color, name, label }) {

  function select(){
    if(color === "#000"){
      return <Content>
              <FontAwesome5 name={name} size={16} color="#FFF" />
              <Label>{label}</Label>
            </Content>
    } else {
      return <FontAwesome5 name={name} size={24} color="#AAA" />
    }
  }
  return select();
}
