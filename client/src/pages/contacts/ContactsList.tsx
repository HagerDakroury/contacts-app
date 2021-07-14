import { Stack, Flex, useDisclosure } from "@chakra-ui/react";
import { Card } from "./ContactCard";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import NewContact from "./NewContact";

export const ContactsList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack direction="column" spacing={2} m={4}>
      <Flex direction="row-reverse" mt={10}>
        <Button
          type="submit"
          bgColor="#31B3C2"
          textColor="#FFFFFF"
          width="100px"
          onClick={onOpen}
          rightIcon={<AddIcon />}
        >
          Add
        </Button>
        <NewContact isOpen={isOpen} onClose={onClose}></NewContact>
      </Flex>

      <Card first="hager" last="eldakroury" email="hagerdakroury" />
      <Card first="hager" last="hahaha" email="hagerdakroury" />
    </Stack>
  );
};
