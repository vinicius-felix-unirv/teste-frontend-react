import { ChakraProvider, FormLabel } from "@chakra-ui/react";

export const LabelPasswordMobile = () => {
  return (
    <ChakraProvider>
      <FormLabel color="#065F44" width="55px" mt={4} fontSize="18px">
        Senha
      </FormLabel>
    </ChakraProvider>
  );
};
