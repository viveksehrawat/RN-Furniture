import React, { useState } from "react";
import { Text } from "react-native";

const Chair = ({ theme }) => {
  const [isBig, setIsBig] = useState(false); 
  
  const changeState = () => {
    setIsBig(currentState => !currentState);
  };

  return (
    <Text
      style={{
        fontSize: isBig ? 24 : 14,
        color: theme === "dark" ? "grey" : "purple",
      }}
      onPress={changeState}
    >
      This is Chair
    </Text>
  );
};

export default Chair;
