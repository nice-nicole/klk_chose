import React from "react";
import {
  Box,
  HStack,
  Avatar,
  Text,
  Flex,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Contacts = () => {
  const contacts = [
    { id: 1, name: "Muco Tresor" },
    { id: 2, name: "Nice Nicolle" },
    { id: 3, name: "Arsene" },
    { id: 4, name: "Kelly" },
    { id: 5, name: "Bercy" },
    { id: 6, name: "Jesus" },
    { id: 7, name: "JDK" },
    { id: 8, name: "Don Divin" },
    { id: 9, name: "Ombeline" },
  ];

  return (
    <Box>
      {/* contact list header */}
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="md">
          Contact List
        </Heading>
        <Link to="/new-contact">
          <IconButton
            colorScheme="purple"
            aria-label="Call Segun"
            size="md"
            icon={<AddIcon />}
          />
        </Link>
      </Flex>

      {contacts.map((contact) => (
        <Box mb={3} key={contact.id}>
          <Link to={`/contacts/${contact.id}`}>
            <HStack>
              <Avatar name={contact.name} />
              <Text>{contact.name}</Text>
            </HStack>
          </Link>
        </Box>
      ))}
    </Box>
  );
};
export default Contacts;
