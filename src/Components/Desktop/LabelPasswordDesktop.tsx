import { ChakraProvider, FormLabel } from "@chakra-ui/react";

export const LabelPasswordDesktop = () => {
  return (
    <ChakraProvider>
      <FormLabel color="#065F44" width="73px" mt={2}>
        Senha:
      </FormLabel>
    </ChakraProvider>
  );
};
