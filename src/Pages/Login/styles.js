import styled from "styled-components/native";
import img from "../../../assets/photo.jpg";

export const Container = styled.ImageBackground.attrs({
  source: img,
})`
  flex: 1;
  min-height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  width: 80%;
  justify-content: space-between;
  align-items: center;
  height: auto;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 44px;
  padding: 0 10px;
  border-radius: 2px;
  color: #fff;
  background-color: #ffffff10;
`;

export const Opacity = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background: #000;
  opacity: 0.9;
`;

export const InputBar = styled.View`
  width: 100%;
  flex-direction: row;
  margin: 10px 0;
`;

export const IconInput = styled.View`
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  height: 44px;
  background-color: #0d81c2;
  border-radius: 2px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const Forgot = styled.Text`
  color: #fdfdfd;
`;

export const RegisterContent = styled.View`
  width: 80%;
  height: 44px;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff10;
  margin-bottom: 20px;
`;

export const RegisterText = styled.Text`
  color: #fefdef;
  font-size: 16px;
  font-weight: bold;
  padding-left: 35%;
`;

export const Arrow = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  background-color: #0d81c2;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;
