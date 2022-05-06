import { StatusBar } from "react-native";
import styled from "styled-components";

export const SafeAreaContainer = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0}px;
`;
