import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import ResetButton from "./ResetButton";
import TipAmountPerson from "./TipAmountPerson";
import TotalPerson from "./TotalPerson";

function Visualization({ TipAmount }) {
  return (
    <Stack
      p={4}
      height={{ base: "230px", sm: "230px", md: "100%", lg: "100%" }}
      bgColor="primary.200"
      borderRadius="lg"
      justifyContent={{
        base: "space-between",
        sm: "space-between",
        md: "space-around",
        lg: "space-around",
      }}
    >
      <Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <TipAmountPerson TipAmount={TipAmount} />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <TotalPerson />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <ResetButton />
      </Stack>
    </Stack>
  );
}

export default Visualization;
