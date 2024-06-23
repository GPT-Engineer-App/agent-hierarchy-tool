import React, { useState } from "react";
import { Box, Flex, IconButton, Text, useDisclosure, VStack, HStack, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUserShield, FaGamepad, FaCog, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleAuthToggle = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
      navigate("/");
    } else {
      setIsAuthenticated(true);
      navigate("/mainPage123");
    }
  };

  return (
    <Box position="sticky" top="0" zIndex="1000" bg={colorMode === "light" ? "blue.700" : "gray.800"} p={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          variant="outline"
          color="white"
        />
        <VStack spacing={0} align="center">
          <Text fontSize="2xl" fontWeight="bold" color={colorMode === "light" ? "white" : "gray.400"}>Team Pachinko</Text>
          <Text fontSize="md" color={colorMode === "light" ? "white" : "gray.400"}>Home</Text>
        </VStack>
        <IconButton
          icon={isAuthenticated ? <FaSignOutAlt /> : <FaSignInAlt />}
          onClick={handleAuthToggle}
          variant="outline"
          color="white"
        />
      </Flex>
      {isOpen && (
        <Box mt={4} bg={colorMode === "light" ? "blue.600" : "gray.700"} p={4} rounded="md">
          <VStack spacing={4} align="start">
            <Link to="/">
              <HStack>
                <FaHome />
                <Text>Home</Text>
              </HStack>
            </Link>
            <Link to="https://agents.747-5.com">
              <HStack>
                <FaUserShield />
                <Text>Agents</Text>
              </HStack>
            </Link>
            <Link to="https://747-5.com">
              <HStack>
                <FaGamepad />
                <Text>Game</Text>
              </HStack>
            </Link>
            <HStack as="button" onClick={toggleColorMode}>
              <FaCog />
              <Text>Toggle Theme</Text>
            </HStack>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;