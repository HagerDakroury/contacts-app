import { ChakraProvider } from "@chakra-ui/react";
import { Landing } from "./pages/landing/Landing";
import { Signup } from "./pages/signup/Signup";

function App() {
  return (
    <ChakraProvider>
      <Signup />
    </ChakraProvider>
  );
}

export default App;
