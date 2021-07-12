import {
  Box,
  Flex,
  Text,
  IconButton,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React from "react";

type ContactCardProps = {
  first: string;
  last: string;
  email: string;
};
export const Card: React.FC<ContactCardProps> = ({ first, last, email }) => {
  return (
    <Flex
      _hover={{
        background: "gray.20",
        color: "gray.500",
      }}
      justify="center"
      p="2"
      direction="row"
      rounded={"md"}
      border="1px"
      borderColor="gray.200"
    >
      <Box>
        <Text size="md">
          {first} {last}
        </Text>
        <Text size="md">{email}</Text>
      </Box>
      <Spacer />
      <ButtonGroup variant="outline" spacing="1">
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Edit Contact"
          icon={<EditIcon />}
          mr="2"
        />
        <IconButton
          variant="outline"
          colorScheme="red"
          aria-label="Edit Contact"
          icon={<DeleteIcon />}
        />
      </ButtonGroup>
    </Flex>
  );
};
