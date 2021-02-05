import { Box, Stack, Text } from "@chakra-ui/react";
import { IoMdPeople } from "react-icons/io";
import { GiHammerBreak } from "react-icons/gi";

export const ImagePage = (props) => {
    const icon = props.value === "Mentor Booking" ? <IoMdPeople size='220px' /> : <GiHammerBreak size='220px' />
    return (
        <Box alignItems="center">
            <Stack align="center">
                {icon}
                <Text fontSize="4xl" >{props.value}</Text>
            </Stack>
        </Box>
    );
}