import unirvlogo from "./UniRV.jpeg";
import { Header } from "./Components/Header";
import { InputEmail } from "./Components/Email";
import { InputPassword } from "./Components/Password";
import { SistemButton } from "./Components/Button";
import { Rodape } from "./Components/Rodape";
import { ExtraLoginOption } from "./Components/ExtraLoginOption";
import { useMemo } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { InputPasswordMobile } from "./Components/PasswordMobile";
import { InputEmailMobile } from "./Components/EmailMobile";
import { SistemButtonMobile } from "./Components/Mobile/ButtonMobile"
import { ExtraLoginOptionMobile} from "./Components/Mobile/ExtraLoginOptionMobile"
import {
  ChakraProvider,
  Box,
  HStack,
  Image,
  Center
} from '@chakra-ui/react'

function App() {
  const [isMobile] = useMediaQuery("(max-width: 850px)");

  const renderContent = useMemo(() => {
    if (isMobile) {
      return (
        <ChakraProvider>
          
            <Box backgroundColor='#FFFFFF' minHeight="100vh">
              <Header />
              <Box
                padding="20px"
              >
                <Center>
                  <Image src={unirvlogo} alt="Descrição da imagem" width={300} height={200} />
                </Center>
                <Box>
                  <InputEmailMobile />
                  <InputPasswordMobile />
                  <SistemButtonMobile />
                  <ExtraLoginOptionMobile />
                </Box>
              </Box>
            </Box>
            <Rodape />
        </ChakraProvider>
      );
    } else {
      return (
        <ChakraProvider>
          <Box minHeight="100vh" backgroundColor='#D9D9D9' display='flex' alignItems='center' justifyContent='center'>
            <Box backgroundColor='#FFFFFF' >
              <Header />
              <HStack
                direction="row"
                align="center"
                width={900}
                height={400}
                spacing={4}
              >
                <Image src={unirvlogo} alt="Descrição da imagem" width={450} height={300} />
                <Box bg="#065F44" width='2px' height="70%" />
                <Box>
                  <InputEmail />
                  <InputPassword />
                  <SistemButton />
                  <ExtraLoginOption />
                </Box>
              </HStack>
            </Box>
            <Rodape />
          </Box>
        </ChakraProvider>
      );
    }
  }, [isMobile]);

  return renderContent;
}

export default App;
