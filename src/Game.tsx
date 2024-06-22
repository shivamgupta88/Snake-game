
import { ChakraProvider, Container, Heading, Box, Button } from "@chakra-ui/react";
import { Provider } from "react-redux";
import CanvasBoard from "./components/CanvasBoard";
import ScoreCard from "./components/ScoreCard";
import store from "./store";
import { Link } from "react-router-dom";
const Game = () => {
  return (
    <div className="bg-[#24A1DE] text-white">
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.sm" centerContent p={4}>
          <Link to="/">home</Link>
          <Heading as="h1" size="lg" mb={4} textAlign="center">Hungry Pyton</Heading>
          <Box w="100%" mb={4}>
            <ScoreCard />
          </Box>
          <Box w="100%" overflowX="scroll">
            <CanvasBoard height={600} width={1000} />
          </Box>
        </Container>
      </ChakraProvider>
    </Provider>
    </div>

  );
};

export default Game;
