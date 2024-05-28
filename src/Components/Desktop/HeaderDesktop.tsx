import { ChakraProvider, Center } from "@chakra-ui/react";
import styled from "styled-components";

export const HeaderDesktop = () => {
  return (
    <ChakraProvider>
      <Center>
      <HeaderTitle>     
          <strong>React System</strong>
      </HeaderTitle>
      </Center>
    </ChakraProvider>
  );
};

const HeaderTitle = styled.h1`
  font-family: ArialBlack, sans-serif;
  font-size: 2.5em;
  color: #065f44;
`;