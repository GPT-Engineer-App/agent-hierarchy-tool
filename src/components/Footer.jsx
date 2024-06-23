import React, { useState } from "react";
import { Box, Flex, IconButton, Text, Link, useColorMode, Button } from "@chakra-ui/react";
import { FaHome, FaUserShield, FaGamepad, FaCog } from "react-icons/fa";

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [iframeSrc, setIframeSrc] = useState("");
  const [showIframe, setShowIframe] = useState(false);

  const handleLinkClick = (url) => {
    setIframeSrc(url);
    setShowIframe(true);
  };

  const handleOpenInNewTab = () => {
    window.open(iframeSrc, "_blank");
  };

  return (
    <Box position="sticky" bottom="0" zIndex="1000" bg="blue.700" p={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Link href="#" color="white" onClick={() => handleLinkClick("/")}>
          <FaHome size="24px" />
        </Link>
        <Link href="#" color="white" onClick={() => handleLinkClick("https://agents.747-5.com")}>
          <FaUserShield size="24px" />
        </Link>
        <Link href="#" color="white" onClick={() => handleLinkClick("https://747-5.com")}>
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
      {showIframe && (
        <Box mt={4}>
          <iframe src={iframeSrc} width="100%" height="500px" title="iframe-content" />
          <Button mt={2} onClick={handleOpenInNewTab} colorScheme="teal" variant="outline">
            Open in New Tab
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Footer;