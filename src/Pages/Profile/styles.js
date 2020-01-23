import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
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

export const Photo = styled.Image.attrs({
  source: require('../../../assets/photo.jpg')
})`

  width: 100%;
  height: 40%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

          // header //
export const Content = styled.View`
  margin-top: -90px;
  width: 90%;
  height: 150px;
  border-radius: 4px;
  background-color: rgba(255,255,255,0.9);
`;

export const Head = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Indexs = styled.View`
  flex-direction: row;
`;

export const Label = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: ${StyleSheet.hairlineWidth}px solid rgba(0,0,0,0.3); */
  text-align: center;
  padding: 10px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #0D81C2;
`;

export const Locale = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const Count = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #0D81C2;
`;
export const CountLabel = styled.Text`
  font-size: 14px;
  color: #333;
`;
       // ScrollView //

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  height: 200px;
  width: 100%;
  margin: 0 auto;
`;

export const HorizontalScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  width: 100%;
  height: 120px;
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px;
`; 
export const Title = styled.Text`
  font-size: 18px;
  align-items: flex-start;
  font-weight: bold;
  color: #222;
`;
export const BioText = styled.Text`
  font-size: 14px;
  flex-wrap: wrap;
  color: #333;
`;
export const Card = styled.View`
  height: 100px;
  width: 85px;
  border-radius: 20px;
  background-color: tomato;
  margin-right: 10px;
`;

