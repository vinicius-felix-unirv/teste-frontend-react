import { ChakraProvider, Input } from "@chakra-ui/react";

export const ImputPasswordMobile = () => {
  return (
    <ChakraProvider>
      <Input
        placeholder="password"
        backgroundColor="#A6A6A6"
        _placeholder={{ opacity: 1, color: "white" }}
        type="password"
      />
    </ChakraProvider>
  );
};
