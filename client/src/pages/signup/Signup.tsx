import { Box } from "@chakra-ui/layout";
import SignForm from "../../components/SignForm";
import { Footer } from "../../components/Footer";
import { useSignup } from "../../hooks/useAuthentiication";
import { useState } from "react";

export const Signup = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const HandleSignup = async (
    event: { preventDefault: () => void },
    username: string,
    password: string
  ) => {
    setIsFetching(true);
    event.preventDefault();
    try {
      await useSignup(username, password);
      setIsFetching(false);
      setIsLoggedin(true);
    } catch (error) {
      setIsFetching(false);
      setError(error);
    }
  };

  return (
    <Box paddingX={[4, 4, 20]} paddingTop={[4, 4, 10]} height={"100%"}>
      <SignForm
        title="Sign Up"
        handler={HandleSignup}
        error={error}
        isFetching={isFetching}
        isLoggedin={isLoggedin}
      />
      <Footer />
    </Box>
  );
};
