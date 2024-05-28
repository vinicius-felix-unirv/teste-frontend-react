import { ChakraProvider, Center, Link, Box } from "@chakra-ui/react";
import { styled } from "styled-components";

export const FooterMobile = () => {
  return (
    <ChakraProvider>
      <Box
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        width="100%"
        height="100px"
        backgroundColor="white"
        zIndex={5}
        mb={-10}
      >
        <Center>
          <Footer>
            Engenharia de Software <br /> 
            <Center> UniRV @2024 </Center>
          </Footer>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

const Footer = styled.h1`
  font-size: 0.8em;
  font-family: Helvetica, Sans-serif;
  color: #065f44;
`;
