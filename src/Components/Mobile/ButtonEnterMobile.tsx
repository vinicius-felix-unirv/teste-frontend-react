import { ChakraProvider, Button } from "@chakra-ui/react";

export const ButtonEnterMobile = () => {
  return (
    <ChakraProvider>
      <Button
        gap="10%"
        backgroundColor="white"
        size="md"
        height="40px"
        width="100%"
        border="2px"
        borderColor="#065F44"
        mb={4}
        mt={6}
      >
        Entrar
      </Button>
    </ChakraProvider>
  );
};
