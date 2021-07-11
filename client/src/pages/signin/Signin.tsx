import { Box } from "@chakra-ui/layout";
import SignForm from "../../components/SignForm";
import { Footer } from "../../components/Footer";

export const Signin = () => {
  const title = "Sign In";
  const handleSignup = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("signed in");
  };

  return (
    <Box paddingX={[4, 4, 20]} paddingTop={[4, 4, 10]} height={"100%"}>
      <SignForm title={title} handler={handleSignup} />
      <Footer />
    </Box>
  );
};
