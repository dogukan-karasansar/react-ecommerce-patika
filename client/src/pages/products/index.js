import { Grid } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/card";
import { useQuery } from "react-query";
import { fetchProductList } from "../../Api";


export default function Products() {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap="2">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Grid>
    </div>
  );
}
