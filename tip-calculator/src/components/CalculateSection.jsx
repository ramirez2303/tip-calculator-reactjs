import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import Bill from "./Bill";
import NumberPeople from "./NumberPeople";
import SelectTip from "./SelectTip";

function CalculateSection({
  handleBillInput,
  handlePeopleInput,
  handleSelectTip,
  handleCustomPercentageInput,
}) {
  return (
    <Stack spacing={4}>
      <Bill handleBillInput={handleBillInput} />
      <SelectTip
        handleSelectTip={handleSelectTip}
        handleCustomPercentageInput={handleCustomPercentageInput}
      />
      <NumberPeople handlePeopleInput={handlePeopleInput} />
    </Stack>
  );
}

export default CalculateSection;
