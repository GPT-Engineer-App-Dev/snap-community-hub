import React, { useState } from 'react';
import { Button, Input, VStack, useToast } from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';

const PhotoUpload = ({ onPhotoUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onPhotoUpload(e.target.result);
        toast({
          title: "Photo uploaded",
          description: "Your photo has been successfully uploaded.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      };
      reader.readAsDataURL(selectedFile);
    } else {
      toast({
        title: "No file selected",
        description: "Please select a photo to upload.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4}>
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      <Button leftIcon={<FaUpload />} colorScheme="teal" onClick={handleUpload}>
        Upload Photo
      </Button>
    </VStack>
  );
};

export default PhotoUpload;