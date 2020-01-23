import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonExit = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin: 15px;
`;
export const HorizontalScroll = styled.ScrollView.attrs({
  horizontal: true,
})`
  
`;