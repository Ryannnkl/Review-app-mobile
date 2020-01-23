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
export const Detail = styled.View`
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: #730d4c;
`;
export const Book = styled.Image`
  width: 270px;
  height: 450px;
  border-radius: 40px;
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