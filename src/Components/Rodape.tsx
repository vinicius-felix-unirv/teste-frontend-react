import {Box,Text } from "@chakra-ui/react"
import './RodapeText.css'
export const Rodape = () =>{
    return(
        <Box position="absolute" bottom="5" width="100%" textAlign="center">
            <Text className="rodapeText">
            Engenharia de Software <br/>
            UniRv @2024
            </Text>
        </Box>
    )
}