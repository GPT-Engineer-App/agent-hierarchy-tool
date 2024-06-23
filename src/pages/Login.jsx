import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, VStack, Input, Button, useToast, Box, Text, useColorMode } from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    if (username === "admin" && password === "Ladexterpre") {
      navigate("/mainPage123");
    } else {
      toast({
        title: "You are not authorized",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={colorMode === "light" ? "blue.500" : "blue.800"}>
      <Box boxShadow="md" p="6" rounded="md" bg="gray.200">
        <Text fontSize="2xl" fontWeight="bold" color={colorMode === "light" ? "black" : "gray.200"} mb={4}>Login</Text>
        <VStack spacing={4}>
          <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleLogin} bg="blue.500" color="white">Login</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;