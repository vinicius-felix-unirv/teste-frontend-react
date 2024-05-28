import { ChakraProvider, Input } from "@chakra-ui/react";

export const ImputEmailMobile = () => {
  return (
    <ChakraProvider>
      <Input
        placeholder="email@example.com.br"
        backgroundColor="#A6A6A6"
        _placeholder={{ opacity: 1, color: "white" }}
        type="email"
      />
    </ChakraProvider>
  );
};
