import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonExit = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  position: absolute;
  justify-content: center;
  align-self: flex-start;
  margin: 5px;
`;
export const HorizontalScroll = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
  disableIntervalMomentum: true,
  snapToAlignment: 'center',
  contentContainerStyle: {
    justifyContent: 'center',
    marginBottom: 20
  }
})`
  flex: 1;
`;

export const Detail = styled.View`
  width: 70%;
  height: 100%;
  position: absolute;
  left: 0;
  z-index: -1;
  background-color: #730d4c;
`;
export const Book = styled.Image`
  width: ${Dimensions.get('window').width - 60}px;
  height: ${Dimensions.get('window').width + 100}px;
  border-radius: 20px;
  margin: 0 30px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: rgba(2555,255,255,0.7);
  font-size: 14px;
`;