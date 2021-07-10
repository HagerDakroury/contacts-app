import { Flex, Text } from "@chakra-ui/layout";

export const Footer = () => (
  <Flex
    height={["unset", "unset", "120px"]}
    py={["6", "6"]}
    bgColor="gray.200"
    mx={["-4", "-4", "-20"]}
    px={["4", "4", "20"]}
    justify="center"
    align="center"
  >
    <Text fontSize="sm">©2021 Contacts Keeper. Made with excitment!</Text>
  </Flex>
);
