import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box position="sticky" bottom="0" zIndex="1000" bg="blue.500" p={4} boxShadow="md">
      <Text fontSize="md" color="white" textAlign="center">
        &copy; {new Date().getFullYear()} Team Pachinko. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;