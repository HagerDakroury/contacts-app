import { Box } from "@chakra-ui/layout";
import SignupForm from "./SignupForm";
import { Footer } from "../../components/Footer";

export const Signup = () => (
  <Box paddingX={[4, 4, 20]} paddingTop={[4, 4, 10]} height={"100%"}>
    <SignupForm />
    <Footer />
  </Box>
);
