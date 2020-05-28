import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #45ae9e;
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
})``;

export const Highlight = styled.View`
  width: 100%;
  height: 350px;
  padding: 3px;
  background-color: #ffffff50;
  border-radius: 4px;
  margin: 15px 0;
`;

export const Post = styled.View`
  background-color: #ededed;
  width: 100%;
  margin: 5px 0;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const PostContent = styled.View`
  width: 95%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 5px;
`;

export const BookImage = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  /* aspect-ratio: ${(props) => props.ratio}; */
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
  color: "#0D81C2",
})`
  margin: 30px 0;
`;

export const Content = styled.View`
  align-items: flex-start;
  justify-content: space-around;
  width: 60%;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
`;

export const Snopses = styled.Text`
  font-size: 14px;
`;
