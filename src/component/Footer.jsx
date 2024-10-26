import { Box, Text } from "@chakra-ui/react";
import Van from "../../public/images/Van.svg";
import InstagramIcon from "../../public/images/Instagram.svg";
import XIcon from "../../public/images/X.svg";
import FacebookIcon from "../../public/images/facebook.svg";

const ContactUs = [
  "Contact Us",
  "Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434",
  "example2020@gmail.com",
  "(904) 443-0343",
];

const MorePart = ["More", "About Us", "Products", "Career", "Contact Us"];

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }} 
      background="#f8f8f8"
      padding={{ base: "20px", md: "40px" }} 
      gap={{ base: "20px", md: "150px" }} 
      alignItems="center"
    >
      <Box position="relative" top="32px" left={{ base: "0", md: "90px" }} mb={{ base: "48px", md: "0" }}>
        <img src={Van} alt="Van" />
      </Box>
      <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="space-around" width={{ base: "100%", md: "900px" }}>
        <Box mb={{ base: "20px", md: "0" }}>
          {ContactUs.map((item, index) => (
            <Text
              key={index}
              fontSize="lg"
              mb={2}
              width="288px"
              color={index === 0 ? "#0f2368" : "#777b84"}
              fontWeight={index === 0 ? "bold" : "normal"}
            >
              {item}
            </Text>
          ))}
        </Box>
        <Box mb={{ base: "20px", md: "0" }}>
          {MorePart.map((item, index) => (
            <Text
              key={index}
              fontSize="lg"
              mb={2}
              color={index === 0 ? "#0f2368" : "#777b84"}
              fontWeight={index === 0 ? "bold" : "normal"}
            >
              {item}
            </Text>
          ))}
        </Box>
      </Box>
      <Box textAlign={{ base: "center", md: "left" }} position="relative" bottom="34px">
        <Text as="h3" color="#0f2368" fontWeight="bold">
          Social Links
        </Text>
        <Box display="flex" justifyContent="center" gap="10px" mt="10px">
          <img src={InstagramIcon} alt="Instagram" />
          <img src={XIcon} alt="X" />
          <img src={FacebookIcon} alt="Facebook" />
        </Box>
        <Text
          color="#777b84"
          width="200px"
          position="relative"
          top="45px"
          right={{ base: "0", md: "80px" }} 
        >
          © 2024 Food Truck Example
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
