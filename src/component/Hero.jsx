import PizzaImg from "../../public/images/Pizza.svg";
import { Button } from "../components/ui/button";
import { Box, Heading, Text } from "@chakra-ui/react";
import Curve from "../../public/images/Curve";

const Hero = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      p={{ base: "20px", md: "0" }}
    >
      <Box
        position="relative"
        top={{ base: "50px", md: "-8px" }}
        left={{ base: "0", md: "120px" }}
        textAlign={{ base: "center", md: "left" }}
        width={{ base: "100%", md: "auto" }}
      >
        <Heading
          as="h2"
          color="#0f2469"
          width="282px"
          fontSize={{ base: "3xl", md: "5xl" }}
          lineHeight="1"
          fontWeight="bold"
          mt="8px"
        >
          Discover the <span style={{ color: "#e23845" }}>Best</span> Food and
          Drinks
        </Heading>
        <Text mt={5} mb={5} color="#444957" width="314px" fontSize="lg">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </Text>
        <Button
          borderRadius="20px"
          color="white"
          bg="#E23744"
          mt="8px"
          width={{ base: "100%", md: "auto" }}
        >
          Explore Now!
        </Button>
      </Box>
      <Box position="relative">
        <Box
          width={{ base: "100%", md: "500px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          position={{ base: "relative", md: "absolute" }}
          right={{ base: "0", md: "2px" }}
          mb={{ base: "20px", md: "0" }}
        >
          <img src={PizzaImg} alt="pizza-img" style={{ maxWidth: "100%" }} />
        </Box>
        <Box position="relative" mb="30px" left={{ base: "0", md: "120px" }}>
          <Curve />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
