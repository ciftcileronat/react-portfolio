import React from "react";
import { VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Social from "./components/Social";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <VStack p={5}>
      <Navbar />
      <Header />
      <Social />
      <Projects />
      <Contact />
      <Footer />
    </VStack>
  );
}

export default App;
