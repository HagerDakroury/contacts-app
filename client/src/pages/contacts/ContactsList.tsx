import { Stack, Flex } from "@chakra-ui/react";
import { Card } from "./ContactCard";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";

export const ContactsList = () => {
  return (
    <Stack direction="column" spacing={2} m={4}>
      <Flex direction="row-reverse" mt={10}>
        <Button
          type="submit"
          bgColor="#31B3C2"
          textColor="#FFFFFF"
          width="100px"
          rightIcon={<AddIcon />}
        >
          Add
        </Button>
      </Flex>

      <Card first="hager" last="eldakroury" email="hagerdakroury" />
      <Card first="hager" last="hahaha" email="hagerdakroury" />
    </Stack>
  );
};
