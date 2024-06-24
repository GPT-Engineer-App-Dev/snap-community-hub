import { Container, VStack, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to PhotoShare
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Share your favorite moments with friends and family.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/sample-photo.jpg" alt="Sample Photo" borderRadius="md" />
        </Box>
        <Button leftIcon={<FaCamera />} colorScheme="teal" variant="solid" size="lg">
          Upload Photo
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;