import React from "react";
import { Box, Flex, IconButton, Text, Link, useColorMode } from "@chakra-ui/react";
import { FaHome, FaUserShield, FaGamepad, FaCog } from "react-icons/fa";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="sticky" bottom="0" zIndex="1000" bg="blue.700" p={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Link href="/" color="white">
          <FaHome size="24px" />
        </Link>
        <Link href="https://agents.747-5.com" color="white">
          <FaUserShield size="24px" />
        </Link>
        <Link href="https://747-5.com" color="white">
          <FaGamepad size="24px" />
        </Link>
        <IconButton
          icon={<FaCog />}
          onClick={toggleColorMode}
          variant="outline"
          color="white"
        />
      </Flex>
      <Text fontSize="md" color="white" textAlign="center" mt={2}>
        &copy; {new Date().getFullYear()} Team Pachinko. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;