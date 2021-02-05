import React from 'react'
import { Select, Stack } from "@chakra-ui/react"
import { mentors } from '../mentors'

export const SelectPage = () => {
    return (
        <React.Fragment>
            <Stack spacing={3} align="center">
                <Select placeholder="Select option" margin="1em" w="60">
                    {mentors.map(({ name,id }) => {
                        return <option  key={id} value={name}>{name}</option>;
                    })}
                </Select>
            </Stack>
        </React.Fragment>
    );
}