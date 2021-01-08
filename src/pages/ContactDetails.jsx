import { Heading, Text, Box, HStack, Button, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import React from "react";
import { Link, useParams } from "react-router-dom";

const ContactDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <Box>
      <Heading size="md">Contact Details</Heading>

      <Text>Names: Nice Nicole</Text>
      <Text>Phone: +257 69151210</Text>
      <Text>Email: nicenicole.in@gmail.com</Text>

      <HStack>
        <Button colorScheme="red">Delete</Button>
        <Button colorScheme="green">Update</Button>
      </HStack>

      <Link to="/">
        <Icon as={ChevronLeftIcon} /> Return
      </Link>
    </Box>
  );
};

export default ContactDetails;
