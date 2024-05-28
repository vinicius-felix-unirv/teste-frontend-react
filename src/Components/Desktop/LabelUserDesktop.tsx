import { ChakraProvider, FormLabel } from "@chakra-ui/react";

export const LabelUserDesktop = () => {
  return (
    <ChakraProvider>
      <FormLabel color="#065F44" width="80px" mt={5}>
        Usuário:
      </FormLabel>
    </ChakraProvider>
  );
};
