import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, BoxProps, Flex, Heading, Text, Stack } from "@chakra-ui/layout";
import landing from "../../../src/assets/landing.svg";

export const LandingCard: React.FC<BoxProps> = (props) => (
  <Box
    minHeight={"calc(100vh - 88px)"}
    pt={[10, 10, "130px"]}
    paddingX={[4, 4, 20]}
    paddingTop={[4, 4, 10]}
    minW="400px"
    {...props}
  >
    <Flex
      justify="space-between"
      flexDirection={["column-reverse", "column-reverse", "row"]}
    >
      <Box>
        <Heading
          paddingTop={24}
          textAlign={["center", "center", "unset"]}
          fontWeight="bold"
          fontSize="4xl"
          mb="10"
        >
          Keep your contacts <Text color="cyan.500">safe</Text>
        </Heading>
        <Text
          fontSize="2xl"
          mb={10}
          maxW={["unset", "unset", "360px"]}
          textAlign={["center", "center", "unset"]}
        >
          A convenient minimal contacts keeper web application
        </Text>
        <Stack direction="row" spacing={4} align="center">
          <Button
            colorScheme="cyan"
            width={["50%", "50%", "unset"]}
            textColor="white"
          >
            Login
          </Button>
          <Button
            colorScheme="cyan"
            width={["50%", "50%", "unset"]}
            textColor="white"
          >
            Try for free
          </Button>
        </Stack>
      </Box>
      <Image src={landing} px={[4, 4, "unset"]} boxSize="70%" />
    </Flex>
  </Box>
);
