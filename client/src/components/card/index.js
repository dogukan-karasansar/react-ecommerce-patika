import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card({ item }) {

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="3" m="3">
      <Link to="#/">
        <Image src={item.image} alt="product" width="500px" height="350px" />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {item.category}
          </Box>
          <Box marginTop="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {item.title}
          </Box>
          <Box>{item.price} TL</Box>
        </Box>
      </Link>

      <Button
        leftIcon={<FaShoppingBasket />}
        colorScheme="purple"
        variant="solid"
      >
        Sepete Ekle
      </Button>
    </Box>
  );
}
