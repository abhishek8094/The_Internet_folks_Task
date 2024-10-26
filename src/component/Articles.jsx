import { Box, Heading, Text } from "@chakra-ui/react";
import meal1 from "../../public/images/meal1.svg";
import meal2 from "../../public/images/meal2.svg";
import meal3 from "../../public/images/meal3.svg";
import meal4 from "../../public/images/meal4.svg";
import meal5 from "../../public/images/meal5.svg";
import meal6 from "../../public/images/meal6.svg";
import { Button } from "../components/ui/button";
import { useState } from "react";

const Articles = () => {
  const articlesData = [
    {
      id: 1,
      image: meal1,
      name: "Grilled Tomatoes at Home",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 2,
      image: meal2,
      name: "Snacks for Travel",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 3,
      image: meal3,
      name: "Post-workout Recipes",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 4,
      image:meal4,
      name: "How To Grill Corn",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 5,
      image: meal5,
      name: "Crunchwrap Supreme",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 6,
      image:  meal6,
      name: "Broccoli Cheese Soup",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesData.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(articlesData.length / articlesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box padding={{ base: "20px", md: "120px" }}>
      <Heading
        as="h3"
        color="#0f2469"
        fontWeight="bold"
        fontSize={{ base: "3xl", md: "5xl" }}
      >
        Latest Articles
      </Heading>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="30px"
        padding={{ base: "20px", md: "20px" }}
        mt="37px"
        justifyContent="center"
      >
        {currentArticles.map((article) => (
          <Box
            key={article.id}
            border="1px solid #e5e8f5"
            padding="15px"
            boxShadow="md"
            borderRadius="2xl"
            width={{ base: "100%", md: "30%" }}
          >
            <img src={article.image} alt="" />
            <Text mt="6" color="#273871" fontWeight="bold">
              {article.name}
            </Text>
            <Text mt="3" color="#63656c" fontSize="sm">
              {article.description}
            </Text>
            <Button
              mt="20px"
              borderRadius="20px"
              background="white"
              color="#424961"
              border="1.5px solid #bcbfc6"
            >
              Read More
            </Button>
          </Box>
        ))}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="18px"
        gap="10px"
      >
        <Button
          onClick={handlePrevPage}
          background="white"
          color="#424961"
          border="1.5px solid #bcbfc6"
          fontSize="16px"
        >
          &lt;
        </Button>
        <Text>
          {currentPage}/{Math.ceil(articlesData.length / articlesPerPage)}
        </Text>
        <Button
          onClick={handleNextPage}
          background="white"
          color="#424961"
          border="1.5px solid #bcbfc6"
          fontSize="16px"
        >
          &gt;
        </Button>
      </Box>
    </Box>
  );
};

export default Articles;
