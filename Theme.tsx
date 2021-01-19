import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components/native";

interface Props {
  children: ReactElement[] | ReactElement;
}

const theme = {
  text: "#fefefe",
  background: "#212121",
};

export default function Theme(props: Props): ReactElement {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
