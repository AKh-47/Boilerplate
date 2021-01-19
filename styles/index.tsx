import styled from "styled-components/native";

export const Text = styled.Text`
  color: ${(props: any) => props.theme.text};
`;

export const View = styled.View`
  background-color: ${(props: any) => props.theme.background};
`;
