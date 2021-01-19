import React, { ReactElement } from "react";
import styled from "styled-components/native";

interface Props {}

const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #212121;
`;

export default function Auth({}: Props): ReactElement {
  return <Page>Auth</Page>;
}
