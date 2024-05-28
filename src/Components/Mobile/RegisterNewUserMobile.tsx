import { ChakraProvider, Center, Link } from "@chakra-ui/react";
import { styled } from "styled-components";

export const RegisterNewUserMobile = () => {
  return (
    <ChakraProvider>
        <Link href="http://localhost:3000/forgot-password" target="_blank">
          <RegisterTitle>
            Cadastrar novo usuario
          </RegisterTitle>
        </Link>
    </ChakraProvider>
  );
};

const RegisterTitle = styled.h1`
  font-family: Georgia, serif;
  color: #A6A6A6;
`;
