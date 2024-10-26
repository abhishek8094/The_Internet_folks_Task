import { Box } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import NavLogo from "../../public/images/Van.svg";

const Navbar = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      position="fixed" 
      width="100%" 
      padding={["15px", "30px"]} 
      zIndex={2}
    >
      <Box width="70px" position="relative" left={["20px", "82px"]}> 
        <img src={NavLogo} alt="Logo" />
      </Box>
      <Button 
        border="2px solid white" 
        borderRadius="20px" 
        color="white" 
        bg="transparent" 
        background="#e23845" 
        fontSize={["sm", "md"]} 
      >
        Get In Touch
      </Button>
    </Box>
  );
};

export default Navbar;
