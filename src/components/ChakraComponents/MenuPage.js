import React from 'react'
import { useDisclosure } from "@chakra-ui/react"
import { IconButtons } from './IconButtons'
import { DrawerPage } from './DrawerPage'
import {
  Box,
  Menu,
} from "@chakra-ui/react"


export const MenuPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      bg="white"
      w="100%"
      p={2}
      color="black"
      borderWidth="2px"
      borderColor="black"
      overflow="hidden"
      marginBottom="2rem"
    >
      <Menu >
        <IconButtons onClick={onOpen} />
        <DrawerPage value="left" isOpen={isOpen} onClose={onClose} />
      </Menu>
    </Box>
  );
}