import { Box } from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Articles from "./component/Articles";
import Footer from "./component/Footer";

import "./App.css";

function App() {
  return (
    <Box bg="#FFFFFF" minH="100vh" overflow="hidden">
     <Navbar/>
     <Hero/>
     <About/>
     <Articles/>
     <Footer/>
    </Box>
  );
}

export default App;
