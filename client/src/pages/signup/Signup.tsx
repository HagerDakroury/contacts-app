import { Box } from "@chakra-ui/layout";
import SignForm from "../../components/SignForm";
import { Footer } from "../../components/Footer";
import { useSignup } from "../../hooks/useAuthentiication";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export const Signup = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const toast = useToast();

  const { signup, isLoading } = useSignup({
    onSuccess: () => {
      toast({ status: "success", description: "Signed up!" });
      setIsLoggedin(true);
    },
    onError: (error: any) => {
      toast({ status: "error", description: error?.response?.data });
    },
  });

  const handleSignup = async (
    event: { preventDefault: () => void },
    username: string,
    password: string
  ) => {
    event.preventDefault();
    signup({ username, password });
  };

  return (
    <Box paddingX={[4, 4, 20]} paddingTop={[4, 4, 10]} height={"100%"}>
      <SignForm
        title="Sign Up"
        handler={handleSignup}
        isLoggedin={isLoggedin}
        isLoading={isLoading}
      />
      <Footer />
    </Box>
  );
};
