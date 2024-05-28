import { ChakraProvider, Image } from "@chakra-ui/react"
import univrlogo from "C:\\Users\\enild\\OneDrive\\Desktop\\tela-de-login\\src\\unirvlogo.jpg";

export const ImageMobile = () => {
    return (
      <ChakraProvider>
        <Image
          src={univrlogo}
          alt="Imagem de exemplo"
          width={240}
          height={140}
          objectFit="contain"
        />
      </ChakraProvider>
    );
}

