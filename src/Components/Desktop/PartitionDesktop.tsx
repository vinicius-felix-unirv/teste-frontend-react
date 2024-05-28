import { ChakraProvider, Box } from "@chakra-ui/react";

export const PartitionDesktop = () => {
  return (
    <ChakraProvider>
       <Box bg="#065F44" width={1} height="70%" />
    </ChakraProvider>
  );
};
