import { ChakraProvider } from "@chakra-ui/react";
import styled from "styled-components";

export const HeaderMobile = () => {
  return (
    <ChakraProvider>
      <HeaderTitle>     
          <strong>React System</strong>
      </HeaderTitle>
    </ChakraProvider>
  );
};

const HeaderTitle = styled.h1`
  font-family: ArialBlack, sans-serif;
  font-size: 1.8em;
  color: #065f44;
`;
