import { ChakraProvider, Image } from "@chakra-ui/react";
import univrlogo from "C:\\Users\\enild\\OneDrive\\Desktop\\tela-de-login\\src\\unirvlogo.jpg";

export const ImageDesktop = () => {
  return (
    <ChakraProvider>
      <Image
        src={univrlogo}
        alt="Imagem de exemplo"
        width={325}
        height={275}
        objectFit="contain"
      />
    </ChakraProvider>
  );
};
