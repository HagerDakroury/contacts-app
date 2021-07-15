import { Box } from "@chakra-ui/layout";
import SignForm from "../../components/SignForm";
import { Footer } from "../../components/Footer";
import { useSignin } from "../../hooks/useAuthentiication";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export const Signin = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const toast = useToast();

  const { signin, isLoading } = useSignin({
    onSuccess: () => {
      toast({ status: "success", description: "Signed up!" });
      setIsLoggedin(true);
    },
    onError: (error: any) => {
      toast({ status: "error", description: error?.response?.data });
    },
  });

  const handleSignin = async (
    event: { preventDefault: () => void },
    username: string,
    password: string
  ) => {
    event.preventDefault();
    signin({ username, password });
  };

  return (
    <Box paddingX={[4, 4, 20]} paddingTop={[4, 4, 10]} height={"100%"}>
      <SignForm
        title="Sign In"
        handler={handleSignin}
        isLoading={isLoading}
        isLoggedin={isLoggedin}
      />
      <Footer />
    </Box>
  );
};
