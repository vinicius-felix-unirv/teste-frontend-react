import {VStack,FormLabel, Input } from "@chakra-ui/react"
export const InputEmailMobile = () => {
    return (
        <VStack mb={2} >
            <FormLabel  color="#065F44" width="110px" fontSize='x-large'>
                Usuário:
            </FormLabel>
            <Input
                placeholder="email@example.com.br"
                backgroundColor="#A6A6A6"
                _placeholder={{ opacity: 1, color: "white" }}
                type="email"
                mt={1} ml={2}
            />
        </VStack>

    )
}