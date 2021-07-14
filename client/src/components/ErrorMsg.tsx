import React from "react";
import { Box, Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

type ErrorMsgProps = {
  message: string;
};
export const ErrorMsg: React.FC<ErrorMsgProps> = ({ message }) => {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={6}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Box>
  );
};
