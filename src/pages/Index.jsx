import React, { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { Container, VStack, HStack, Input, Select, Button, Box, Text, StackDivider } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

const Index = () => {
  const { colorMode } = useColorMode();
  const [username, setUsername] = useState("");
  const [isAgent, setIsAgent] = useState(true);
  const [hierarchy, setHierarchy] = useState([]);

  const fetchHierarchy = async () => {
    try {
      const response = await fetch(`https://bridge.747lc.com/Default/GetHierarchy?username=${username}&isAgent=${isAgent}`, {
        headers: {
          accept: "text/plain",
        },
      });
      const data = await response.json();
      const filteredHierarchy = data.hierarchy.slice(2); // Remove the first two entries
      setHierarchy(filteredHierarchy);
    } catch (error) {
      console.error("Error fetching hierarchy:", error);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={colorMode === "light" ? "blue.500" : "gray.900"}>
      <Text fontSize="2xl" fontWeight="bold" color={colorMode === "light" ? "white" : "gray.200"} mb={4}>Username Information Checker</Text>
      <VStack spacing={4} boxShadow="md" p="6" rounded="md" bg={colorMode === "light" ? "gray.200" : "gray.700"}>
        <HStack spacing={4}>
          <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Select value={isAgent} onChange={(e) => setIsAgent(e.target.value === "true")}>
            <option value="true">Agent</option>
            <option value="false">Player</option>
          </Select>
        </HStack>
        <Button onClick={fetchHierarchy} bg="blue.500" color="white">Submit</Button>
      </VStack>
      <VStack spacing={4} mt={8} boxShadow="md" p="6" rounded="md" bg={colorMode === "light" ? "gray.50" : "gray.800"} width="100%">
        {hierarchy.map((user, index) => (
          <Box key={user.clientId} boxShadow="md" p="4" rounded="md" bg={colorMode === "light" ? "white" : "gray.700"} width="100%">
            <VStack spacing={2} divider={<StackDivider borderColor="gray.200" />}>
              <Text fontSize="lg" fontWeight="bold">{user.username}</Text>
              <Text fontSize="md">UserID: {user.clientId}</Text>
            </VStack>
            {index < hierarchy.length - 1 && <ArrowDownIcon mt={2} />}
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;