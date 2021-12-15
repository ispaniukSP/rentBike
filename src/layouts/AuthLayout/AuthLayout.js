import React from "react";
import { Flex } from "../../components/Flex/Flex";
import * as Styled from "./style";

export const AuthLayout = ({ children }) => {
  return (
    <Flex width="100%" height="100vh">
      <Styled.AppWrapper>
        <Styled.AbsoluteBackground />
        
        <Styled.AppImage />
        
        <Styled.AppContent>
          {children}
        </Styled.AppContent>
      </Styled.AppWrapper>
    </Flex>
  );
};
