import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProduct } from "../../Api";
import { Box, Button, Text } from "@chakra-ui/react";
import { FaShoppingBasket } from "react-icons/fa";
import ImageGallery from "react-image-gallery";

export default function ProductDetail() {
  const { product_id } = useParams();
  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Hata Oluştu</div>;
  }

  const images = [
    {
      original: data.image,
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
    },
  ];

  return (
    <div>
      {" "}
      <Button
        leftIcon={<FaShoppingBasket />}
        colorScheme="purple"
        variant="solid"
      >
        Sepete Ekle
      </Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{data.category}</Text>
      <p>{data.description}</p>
      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}
