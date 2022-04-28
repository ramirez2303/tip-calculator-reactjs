import { Button } from "@chakra-ui/react";
import React from "react";

function ResetButton() {
  return (
    <>
      <Button
        h="45px"
        w="100%"
        bgColor="primary.100"
        _hover={{bgColor:"teal.200"}}
        _active={{bgColor:"teal.100"}}
        fontSize="xs"
        color="primary.200"
      >
        RESET
      </Button>
    </>
  );
}

export default ResetButton;
