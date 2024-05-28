import {
  Box,
  Center,
  ChakraProvider,
  HStack,
  Flex,
  useMediaQuery,
  SimpleGrid,
} from "@chakra-ui/react";
import { useMemo } from "react";
import {
  HeaderMobile,
  ImageMobile,
  ImputEmailMobile,
  ImputPasswordMobile,
  LabelUserMobile,
  LabelPasswordMobile,
  ButtonEnterMobile,
  RegisterNewUserMobile,
  ForgotPasswordMobile,
  FooterMobile,
} from "./Components/Mobile";

import {
  HeaderDesktop,
  ImageDesktop,
  PartitionDesktop,
  ImputEmailDesktop,
  LabelUserDesktop,
  LabelPasswordDesktop,
  ImputPasswordDesktop,
  ButtonEnterDesktop,
  FooterDesktop,
} from "./Components/Desktop";

function MyComponent() {
  const [isMobile] = useMediaQuery("(max-width: 431px)");

  const renderContent = useMemo(() => {
    if (isMobile) {
      return (
        <ChakraProvider>
          <SimpleGrid columns={1} spacing={5} padding={10}>
            <center>
              <HeaderMobile />
              <ImageMobile />

              <div>
                <LabelUserMobile />
                <ImputEmailMobile />

                <LabelPasswordMobile />
                <ImputPasswordMobile />
              </div>

              <ButtonEnterMobile />

              <RegisterNewUserMobile />
              <ForgotPasswordMobile />

              <FooterMobile />
            </center>
          </SimpleGrid>
        </ChakraProvider>
      );
    } else {
      return (
        <ChakraProvider>
          <Flex
            minHeight="100vh"
            backgroundColor="#D9D9D9"
            padding="25px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box backgroundColor="#FFFFFF" padding="60px">
              <HeaderDesktop />

              <HStack
                spacing="center"
                direction="row"
                justify="space-between"
                align="center"
                width={700}
                height={300}
              > 
              
                <ImageDesktop />
                <PartitionDesktop />

                <Box>
                  <Flex flexDirection="row" alignItems="flex-start" mb={4}>
                    <LabelUserDesktop />
                    <ImputEmailDesktop />
                  </Flex>

                  <Flex
                    flexDirection="row"
                    alignItems="flex-start"
                    mb={4}
                    ml={1}
                  >
                    <LabelPasswordDesktop />
                    <ImputPasswordDesktop />
                  </Flex>

                  <ButtonEnterDesktop />

                  <Center>
                    <RegisterNewUserMobile />
                  </Center>
                  <Center>
                    <ForgotPasswordMobile />
                  </Center>
                </Box>
              </HStack>
            </Box>

            <FooterDesktop />
          </Flex>
        </ChakraProvider>
      );
    }
  }, [isMobile]);

  return renderContent;
}

function App() {
  return <MyComponent />;
}

export default App;
