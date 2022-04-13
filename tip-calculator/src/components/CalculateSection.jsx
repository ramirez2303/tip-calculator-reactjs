import { Stack } from "@chakra-ui/react";
import React from "react";
import Bill from "./Bill";
import NumberPeople from "./NumberPeople";
import SelectTip from "./SelectTip";

function CalculateSection() {
  return (
    <Stack paddingY={6} paddingX={6} spacing={4}>
      <Bill />
      <SelectTip />
      <NumberPeople />
    </Stack>
  );
}

export default CalculateSection;
