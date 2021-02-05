import { Stack, Box, Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { ImagePage } from "./ChakraComponents/ImagePage";

export const Error404 = () => {
    return (
        <Box alignItems="center">
            <Stack align="center">
                <ImagePage value="Error 404" />
                <Text fontSize="4xl" color="blue">
                    Page not found
                </Text>
                <Text fontSize="4xl" color="blue">
                    <Link to="/">Ir a la página principal</Link>
                </Text>
            </Stack>
        </Box>
    );
}