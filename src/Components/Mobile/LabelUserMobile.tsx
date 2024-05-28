import { ChakraProvider, FormLabel } from "@chakra-ui/react";

export const LabelUserMobile = () => {
  return (
    <ChakraProvider>
      <FormLabel color="#065F44" width="65px" fontSize="18px" mt={4}>
        Usuário
      </FormLabel>
    </ChakraProvider>
  );
};
