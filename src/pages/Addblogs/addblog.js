import React, { useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import './addblog.css'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  useToast
} from '@chakra-ui/react';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    Blog_Title: '',
    Description: '',
    Author_Name: ''
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const response = await axios.post('http://localhost:3030/api/v1/blog/create', formData);
      console.log('Form submitted successfully:', response.data);
      setFormData({
        Blog_Title: '',
        Description: '',
        Author_Name: ''
      });
      toast({
        title: "Blog added.",
        description: "Your blog has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "An error occurred.",
        description: "Unable to add blog. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout>
      <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
        <Heading as="h1" size="xl" mb={5} textAlign="center">
          Add New Blog Post
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="Blog_Title" isRequired>
              <FormLabel>Blog Title</FormLabel>
              <Input
                type="text"
                name="Blog_Title"
                value={formData.Blog_Title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="Description" isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="Author_Name" isRequired>
              <FormLabel>Author Name</FormLabel>
              <Input
                type="text"
                name="Author_Name"
                value={formData.Author_Name}
                onChange={handleChange}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Layout>
  );
};

export default AddBlog;
