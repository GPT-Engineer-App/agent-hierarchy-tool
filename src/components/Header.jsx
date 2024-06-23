import React from "react";
import { Box, Flex, IconButton, Text, Button, useDisclosure, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="sticky" top="0" zIndex="1000" bg="blue.500" p={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          variant="outline"
          color="white"
        />
        <VStack spacing={0} align="center">
          <Text fontSize="2xl" fontWeight="bold" color="white">Team Pachinko</Text>
          <Text fontSize="md" color="white">Home</Text>
        </VStack>
        <Button colorScheme="teal" variant="outline">
          Login/Logout
        </Button>
      </Flex>
      {isOpen && (
        <Box mt={4} bg="blue.600" p={4} rounded="md">
          <VStack spacing={4} align="start">
            <Link to="/">Home</Link>
            {/* Add more links as needed */}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;