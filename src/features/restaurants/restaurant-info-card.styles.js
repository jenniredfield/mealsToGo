import { Card } from "react-native-paper";
import styled from "styled-components";
import { Text } from "../../components/typography/text.component";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[1]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[1]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Row = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[3]} 0;
`;

export const Section = styled.View`
  flex-direction: row;
`;

export const SectionEnd = styled(Section)`
  justify-content: flex-end;
  flex: 1;
`;

export const ClosedText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
