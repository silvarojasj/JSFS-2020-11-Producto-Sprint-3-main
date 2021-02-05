import React from "react";
import { IoMdPerson } from "react-icons/io";
import { IoIosMedical } from "react-icons/io";
import { Input, Stack, InputGroup, InputLeftAddon } from "@chakra-ui/react"

export const Inputs = (props) => {
    const icon = props.name === "User" ? <IoMdPerson /> : <IoIosMedical />;
    return (
        <Stack spacing={3}>
            <InputGroup margin="1em" >
                <InputLeftAddon
                    bg="gray.300"
                    color="black"
                    children={icon}
                />
                <Input
                    placeholder={props.name}
                    type={props.type}
                />
            </InputGroup>
        </Stack>
    );
}
