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
import { EditPopover } from "./EditPopover";

type ContactCardProps = {
  first: string;
  last: string;
  email: string;
};
export const Card: React.FC<ContactCardProps> = ({ first, last, email }) => {
  return (
    <Flex
      justify="center"
      p="2"
      direction="row"
      rounded={"md"}
      border="1px"
      borderColor="gray.200"
    >
      <Box
        _hover={{
          background: "gray.20",
          color: "gray.500",
        }}
      >
        <Text size="md">
          {first} {last}
        </Text>
        <Text size="md">{email}</Text>
      </Box>
      <Spacer />
      <ButtonGroup variant="outline" spacing="1">
        <EditPopover
          trigger={
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Edit Contact"
              icon={<EditIcon />}
              mr="2"
            />
          }
          first={first}
          last={last}
          email={email}
        >
          {" "}
        </EditPopover>
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
