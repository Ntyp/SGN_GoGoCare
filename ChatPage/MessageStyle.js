import styled from 'styled-components';

export const ContainerList = styled.View`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  background-color: #ffffff;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(232, 232, 232, 1);
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserImgWrapper = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  margin-left: 10px;
  width: 300px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(232, 232, 232, 1);
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const UserName = styled.Text`
  font-size: 16px;
`;

export const PostTime = styled.Text`
  font-size: 12px;
  color: rgba(189, 189, 189, 1);
`;

export const MessageText = styled.Text`
  font-size: 14px;
  color: rgba(24, 160, 251, 1);
  ${'' /* margin-right: 60px; */}
  flex:1;
`;
