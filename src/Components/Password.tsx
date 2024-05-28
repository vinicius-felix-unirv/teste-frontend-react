import {HStack,FormLabel, Input } from "@chakra-ui/react"
export const InputPassword = () => {
    return (
        <HStack>
            <FormLabel color="#065F44" width="100px" mt={1} ml={5}>
                Password:
            </FormLabel>
            <Input
                placeholder="********"
                backgroundColor="#A6A6A6"
                _placeholder={{ opacity: 1, color: "white" }}
                type="password"
                mt={1}
            />
        </HStack>

    )
}