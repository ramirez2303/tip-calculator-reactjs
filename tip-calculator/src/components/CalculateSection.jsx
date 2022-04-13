import { Stack } from "@chakra-ui/react";
import React from "react";
import Bill from "./Bill";

function CalculateSection() {
  return (
    <Stack paddingY={6} paddingX={6}>
      <Bill />
    </Stack>
  );
}

export default CalculateSection;
