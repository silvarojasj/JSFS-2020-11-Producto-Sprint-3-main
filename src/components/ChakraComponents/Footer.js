import { Box, Flex, Text, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export const Footer = (props) => {
    // linkPage1="/bookings",
    // linkPage2="/create-booking"
    return (
        <footer>
            <Box
                bg="white"
                w="100%"
                p={2}
                color="black"
                borderWidth="2px"
                borderColor="black"
                overflow="hidden"
            >
                <Flex spacing={4} direction="row">
                    <p>
                        <Link to={props.linkPage1}>
                            <Text fontSize="2xl">
                                Booking List
                            </Text>
                        </Link>
                        <Spacer />
                        <Link to={props.linkPage2}>
                            <Text fontSize="2xl">
                                Create Booking
                            </Text></Link>
                    </p>
                </Flex>
            </Box>
        </footer>
    );
}