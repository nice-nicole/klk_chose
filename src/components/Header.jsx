import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
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
  );
}

export default Header;
