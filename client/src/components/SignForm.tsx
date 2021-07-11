import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import React, { useState } from "react";

type SignFormProps = {
  title: string;
  handler: (event: { preventDefault: () => void }) => void;
};
const SignForm: React.FC<SignFormProps> = ({ title, handler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password === "" || username === "";

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      minHeight={"80vh"}
      pt={[10, 10, "130px"]}
      paddingX={[4, 4, 20]}
      paddingTop={[4, 4, 10]}
      minW="400px"
      flexDirection="column"
    >
      <Box p={10}>
        <Box textAlign="center">
          <Heading textColor="#31B3C2">{title}</Heading>
        </Box>
        <Box my={20} textAlign="center">
          <form onSubmit={handler}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="username"
                rule={{ required: true }}
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                rule={{ required: true }}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              isDisabled={isInvalid}
              bgColor="#31B3C2"
              textColor="#FFFFFF"
            >
              {title}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignForm;
