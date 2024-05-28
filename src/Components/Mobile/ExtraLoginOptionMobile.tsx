import { VStack, Center, Link } from "@chakra-ui/react"
import React from "react"
export const ExtraLoginOptionMobile = () => {
    return (
        <Center>
            <VStack mt={2.5}>
                <Link
                    href="http://localhost:3000/forgot-password"
                    target="_blank"
                >
                    <h1
                        style={{
                            fontFamily: "Georgia,serif",
                            color: "#A6A6A6",
                        }}
                    >
                        Cadastrar novo usuario
                    </h1>
                </Link>

                <Link
                    href="http://localhost:3000/forgot-password"
                    target="_blank"
                >
                    <h1
                        style={{
                            fontFamily: "Georgia, serif",
                            color: "#A6A6A6",
                        }}
                    >
                        Esqueci minha senha
                    </h1>
                </Link>

            </VStack>
        </Center>
    )
}