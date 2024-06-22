// import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
// import { Provider } from "react-redux";
// import CanvasBoard from "./components/CanvasBoard";
// import ScoreCard from "./components/ScoreCard";
// import store from "./store";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <ChakraProvider>
//         <Container maxW="container.lg" centerContent>
//           <Heading as="h1" size="xl">SNAKE GAME</Heading>
//           <ScoreCard />
//           <CanvasBoard height={600} width={1000} />
//         </Container>
//       </ChakraProvider>
//     </Provider>
//   );
// };

// export default App;

 
import React from 'react'
import Game from './Game'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/game",
      element: <Game/>,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
