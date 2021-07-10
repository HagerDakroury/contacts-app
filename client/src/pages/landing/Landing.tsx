import { Box } from "@chakra-ui/layout";
import { LandingCard } from "./LandingCard";
import { Footer } from "../../components/Footer";

export const Landing = () => (
  <Box paddingX={[4, 4, 20]} paddingTop={[2, 2, 2]} minW="200px">
    <LandingCard />
    <Footer />
  </Box>
);
