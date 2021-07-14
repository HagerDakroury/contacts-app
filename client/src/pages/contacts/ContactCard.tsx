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
import { useMutation, useQueryClient } from "react-query";
import { deleteContact } from "../../hooks/useContact";

type ContactCardProps = {
  _id: string;
  first: string;
  last: string;
  email: string;
};
export const Card: React.FC<ContactCardProps> = ({
  _id,
  first,
  last,
  email,
}) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteContact, {
    onSuccess: () => {
      queryClient.invalidateQueries("contacts");
    },
  });

  const handleDelete = () => {
    mutate({ _id, first, last, email });
  };

  return (
    <Flex
      id={_id}
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
          _id={_id}
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
          onClick={handleDelete}
          icon={<DeleteIcon />}
        />
      </ButtonGroup>
    </Flex>
  );
};
