import { IconButton, Stack } from "@chakra-ui/react"
import { IoIosMenu } from "react-icons/io";

export const IconButtons = (props) => {
    return (
        <Stack direction="row">
            <IconButton
                align="left"
                aria-label="options"
                icon={<IoIosMenu />}
                bg="white"
                onClick={props.onClick}
            />
        </Stack>
    );
}