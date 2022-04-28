import { Stack, Text } from "@chakra-ui/react";
import React from "react";

function TipAmountPerson({ TipAmount }) {
  return (
    <>
      <Stack spacing={0}>
        <Text fontSize="14px" color="secondary.300">
          Tip Amount
        </Text>
        <Text fontSize="12px" color="secondary.100">
          / person
        </Text>
      </Stack>
      <Stack>
        <Text color="primary.100" fontSize="2xl">
          {TipAmount}
        </Text>
      </Stack>
    </>
  );
}

export default TipAmountPerson;
