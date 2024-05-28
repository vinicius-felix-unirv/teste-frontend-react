import {VStack,FormLabel, Input, Center } from "@chakra-ui/react"
export const InputPasswordMobile = () => {
    return (
        <VStack>
            <FormLabel color="#065F44" width="110px" fontSize='x-large'>
                Password:
            </FormLabel>
            <Input
                placeholder="********"
                backgroundColor="#A6A6A6"
                _placeholder={{ opacity: 1, color: "white" }}
                type="password"
                mt={1}
            />
        </VStack>

    )
}