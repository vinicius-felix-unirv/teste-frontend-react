import { ChakraProvider, Center, Link } from "@chakra-ui/react";
import { styled } from "styled-components";

export const ForgotPasswordMobile = () => {
  return (
    <ChakraProvider>
      <Link href="http://localhost:3000/forgot-password" target="_blank">
        <RegisterTitle>
            Esqueci minha senha
        </RegisterTitle>
      </Link>
    </ChakraProvider>
  );
};

const RegisterTitle = styled.h1`
  font-family: Georgia, serif;
  color: #a6a6a6;
`;
