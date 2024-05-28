import {HStack,FormLabel, Input } from "@chakra-ui/react"
export const InputEmail = () => {
    return (
        <HStack mb={4} >
            <FormLabel  color="#065F44" width="100px" mt={1} ml={5}>
                Usuário:
            </FormLabel>
            <Input
                placeholder="email@example.com.br"
                backgroundColor="#A6A6A6"
                _placeholder={{ opacity: 1, color: "white" }}
                type="email"
                mt={1} ml={2}
            />
        </HStack>

    )
}