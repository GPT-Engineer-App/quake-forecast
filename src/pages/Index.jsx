import { Box, Container, Heading, List, ListItem, ListIcon, VStack } from "@chakra-ui/react";
import { FaRegDotCircle } from "react-icons/fa";

const Index = () => {
  // Hypothetical data for earthquake predictions
  const earthquakePredictions = [
    { id: 1, location: "Tokyo", magnitude: 7.2, date: "2023-04-10" },
    { id: 2, location: "San Francisco", magnitude: 6.5, date: "2023-05-22" },
    { id: 3, location: "Jakarta", magnitude: 8.1, date: "2023-06-30" },
  ];

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Earthquake Predictions
        </Heading>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <List spacing={3}>
            {earthquakePredictions.map((prediction) => (
              <ListItem key={prediction.id}>
                <ListIcon as={FaRegDotCircle} color="green.500" />
                Location: {prediction.location}, Magnitude: {prediction.magnitude}, Expected Date: {prediction.date}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
