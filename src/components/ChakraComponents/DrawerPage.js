import React from 'react'
import { Buttons } from './Buttons'
import {
    Avatar,
    useDisclosure,
    Text,
    Wrap,
    Stack,
    WrapItem,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerFooter,
} from "@chakra-ui/react"
import { useHistory } from "react-router-dom";

export const DrawerPage = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const history = useHistory()

    const navigateToMentorList = () => {
        history.push("/MentorList");
    }
    const navigateToMyBookings = () => {
        history.push("/Mybookings");
    }
    return (
        <Drawer placement={props.value} onClose={props.onClose} isOpen={props.isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="3px">
                        <Wrap>
                            <WrapItem>
                                <Avatar name="Juan Manuel" bg="Green" borderRadius="full" />
                                <Text fontSize="3xl" fontWeight="bold">
                                    Juan Manuel
                                </Text>
                            </WrapItem>
                        </Wrap>
                    </DrawerHeader>
                    <DrawerBody>
                        <Stack>
                            <Buttons name="Book Mentor" onClick={navigateToMentorList} />
                            <Buttons name="My Bookings" onClick={navigateToMyBookings} />
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter>
                        <Buttons name="Logout" onClick={props.onClose} />
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
}