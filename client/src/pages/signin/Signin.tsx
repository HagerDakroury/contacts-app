import { Box } from "@chakra-ui/layout";
import SignForm from "../../components/SignForm";
import { Footer } from "../../components/Footer";
import { useSignin } from "../../hooks/useAuthentiication";
import { useState } from "react";

export const Signin = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const HandleSignin = async (
    event: { preventDefault: () => void },
    username: string,
    password: string
  ) => {
    setIsFetching(true);

    event.preventDefault();
    try {
      await useSignin(username, password);
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
        title="Sign In"
        handler={HandleSignin}
        error={error}
        isFetching={isFetching}
        isLoggedin={isLoggedin}
      />
      <Footer />
    </Box>
  );
};
