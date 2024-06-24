import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import PhotoUpload from "../components/PhotoUpload";
import { FaCamera } from "react-icons/fa";

const Index = () => {
  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (newPhoto) => {
    setPhotos([...photos, newPhoto]);
  };

  return (
    <Container centerContent maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to PhotoShare
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Share your favorite moments with friends and family.
        </Text>
        <PhotoUpload onPhotoUpload={handlePhotoUpload} />
        {photos.length > 0 && (
          <Box width="100%">
            <Heading as="h2" size="lg" mb={4}>
              Uploaded Photos
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {photos.map((photo, index) => (
                <Image key={index} src={photo} alt={`Uploaded photo ${index + 1}`} borderRadius="md" />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;