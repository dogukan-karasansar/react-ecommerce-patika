import { Grid, Button } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/card";
import { useInfiniteQuery, useQuery } from "react-query";
import { fetchProductList } from "../../Api";

export default function Products() {
  const {
    isLoading,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastGroup, allGroup) => {
      const moreGroupExist = lastGroup.length === 20;

      if (!moreGroupExist) {
        return;
      }

      return allGroup.length + 1;
    },
  });

  console.log(data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap="2">
        {/* {data.map((item, index) => (
          <Card key={index} item={item} />
        ))} */}
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </div>
  );
}
