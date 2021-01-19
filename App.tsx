import React from "react";
import Theme from "./Theme";

import { Text, View } from "./styles";

export default function App() {
  return (
    <React.Fragment>
      <Theme>
        <View>
          <Text>Hello World!</Text>
        </View>
      </Theme>
    </React.Fragment>
  );
}
