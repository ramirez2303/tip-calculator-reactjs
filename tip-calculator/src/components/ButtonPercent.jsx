import { Button, Input } from "@chakra-ui/react";
import React from "react";

function ButtonPercent() {
  const percent = [5, 10, 15, 25, 50];
  return (
    <>
      {[...percent].map((i) => {
        return (
          <Button
            key={i}
            id={i}
            w="100%"
            h="7"
            fontSize="sm"
            bg="primary.200"
            borderRadius="6px"
            _hover={{ backgroundColor: "primary.100", color: "primary.200" }}
            _active={{ backgroundColor: "primary.100", color: "primary.200" }}
            _focus={{ backgroundColor: "primary.100", color: "primary.200" }}
          >
            {`${i}%`}
          </Button>
        );
      })}
      <Input
        w="100%"
        h="7"
        fontSize="sm"
        bg="gray.100"
        _active={{ border: "2px solid", borderColor: "primary.100" }}
        _focus={{ border: "2px solid", borderColor: "primary.100" }}
        borderRadius="6px"
        color="primary.200"
        placeholder="Custom"
        _placeholder={{ color: "primary.300" }}
        textAlign="right"
      />
    </>
  );
}

export default ButtonPercent;
