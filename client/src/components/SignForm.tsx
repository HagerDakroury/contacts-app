import {
  CircularProgress,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import { ErrorMsg } from "../components/ErrorMsg";
import { Redirect } from "react-router-dom";

type SignFormProps = {
  title: string;
  handler: (
    event: { preventDefault: () => void },
    username: string,
    password: string
  ) => void;
  error: string;
  isFetching: boolean;
  isLoggedin: boolean;
};
const SignForm: React.FC<SignFormProps> = ({
  title,
  handler,
  error,
  isFetching,
  isLoggedin,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          <form onSubmit={(e) => handler(e, username, password)}>
            {error && <ErrorMsg message={error} />}
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="username"
                rule={{ required: true }}
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              bgColor="#31B3C2"
              textColor="#FFFFFF"
            >
              {isFetching ? (
                <CircularProgress isIndeterminate size="24px" color="teal" />
              ) : (
                title
              )}
            </Button>
          </form>
        </Box>
      </Box>
      {isLoggedin ? <Redirect to="/dashboard" /> : ""}
    </Flex>
  );
};

export default SignForm;
