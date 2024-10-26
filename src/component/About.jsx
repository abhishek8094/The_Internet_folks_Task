import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import SpoonImg from "../../public/images/Spoon.svg";

const About = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      padding="24px"
      background="#f7f8fc"
      flexDirection={{ base: "column", md: "row" }}
       mt="90px"
    >
      <Box mb={{ base: "20px", md: "0" }}>
        {" "}
        <img
          src={SpoonImg}
          alt="spoon-img"
          style={{ width: "100%", maxWidth: "300px" }}
        />
      </Box>
      
      <Box
        width={{ base: "100%", md: "500px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading
          as="h3"
          color="#0f2469"
          fontWeight="bold"
          fontSize={{ base: "3xl", md: "5xl" }}
          mb="24px"
        >
          About Us
        </Heading>
        <Text
          color="#444957"
          width={{ base: "100%", md: "435px" }}
          mb="15px"
          fontSize="lg"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </Text>
        <Button
          borderRadius="20px"
          color="white"
          bg="#E23744"
          width={{ base: "100%", md: "auto" }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default About;
