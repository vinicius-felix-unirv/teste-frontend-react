import { ChakraProvider, Button } from "@chakra-ui/react";

export const ButtonEnterDesktop = () => {
  return (
    <ChakraProvider>
      <Button
        gap="100px"
        backgroundColor="white"
        size="md"
        height="40px"
        width="100%"
        border="2px"
        borderColor="#065F44"
        mb={4}
      >
        Entrar
      </Button>
    </ChakraProvider>
  );
};
