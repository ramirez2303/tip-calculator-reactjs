import { Button, NumberInput, NumberInputField } from "@chakra-ui/react";
import React, { useState } from "react";

function ButtonPercent({ handleSelectTip, handleCustomPercentageInput }) {
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
            onClick={() => handleSelectTip(i)}
          >
            {`${i}%`}
          </Button>
        );
      })}
      <NumberInput>
        <NumberInputField
          w="100%"
          h="7"
          p="0 5px"
          placeholder="Custom"
          _placeholder={{ color: "primary.300" }}
          fontSize="xs"
          textAlign="center"
          bg="gray.100"
          _active={{ border: "2px solid", borderColor: "primary.100" }}
          _focus={{
            border: "2px solid",
            borderColor: "primary.100",
            textAlign: "right",
          }}
          borderRadius="6px"
          color="primary.200"
          precision={2}
          onChange={handleCustomPercentageInput}
        />
      </NumberInput>
    </>
  );
}

export default ButtonPercent;
