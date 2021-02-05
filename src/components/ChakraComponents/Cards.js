import React from 'react'
import { Box, Badge, Text, Spacer, Flex, useProps } from "@chakra-ui/react";
import { Buttons } from './Buttons';


export const Cards = (props) => {
    let color = (props.state === "Approved" || props.state === "online") ? "green" :
        (props.state === "Pending" || props.state === "busy") ? "yellow" : "red";

    return (
        <Box
            bg="white"
            p={2}
            color="black"
            maxW="sm"
            borderWidth="2px"
            borderColor="black"
            overflow="hidden"
            margin="0.5rem"
        >
            <Flex spacing={4}>
                <Text fontSize="4xl" fontWeight="bold">
                    {props.name}
                </Text>
                <Spacer />
                <Text>
                    <Badge colorScheme={color}>
                        {props.state}
                    </Badge>
                </Text>
            </Flex>

            <Flex spacing={4}>
                <Text fontSize="2xl" >
                    {props.date}
                </Text>
                <Spacer />
                <Text >
                    {props.time}
                -
                {props.time}
                </Text>
            </Flex>
            <Buttons name="CANCEL" />
        </Box>
    );
}