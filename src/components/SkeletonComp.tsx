import React from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonComp = () => {
  return (
    <Card
      borderRadius={10}
      overflow={"hidden"}
      width={"250px"}
      height={"250px"}
    >
      <Skeleton height={"200px"} width={"300px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonComp;
