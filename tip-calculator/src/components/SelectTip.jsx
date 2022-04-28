import { Grid, Text, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import ButtonPercent from "./ButtonPercent";

function SelectTip({
  handleSelectTip,
  handleCustomPercentageInput,
}) {
  return (
    <Stack>
      <Text
        fontSize={{ base: "xs", sm: "xs", md: "small", lg: "small" }}
        color="primary.300"
      >
        Select Tip %
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={3}
        color="secondary.300"
      >
        <ButtonPercent handleSelectTip={handleSelectTip} handleCustomPercentageInput={handleCustomPercentageInput} />
      </Grid>
    </Stack>
  );
}

export default SelectTip;
