import { Stack, Text } from "@chakra-ui/react";
import React from "react";

function TotalPerson() {
  return (
    <>
      <Stack spacing={0}>
        <Text fontSize="14px" color="secondary.300">
          Total
        </Text>
        <Text fontSize="12px" color="secondary.100">
          / person
        </Text>
      </Stack>
      <Stack>
        <Text color="primary.100" fontSize="2xl">
          $32.79
        </Text>
      </Stack>
    </>
  );
}

export default TotalPerson;
