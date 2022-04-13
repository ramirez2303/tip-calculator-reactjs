import { Grid, Text, Stack } from "@chakra-ui/react";
import React from "react";
import ButtonPercent from "./ButtonPercent";

function SelectTip() {
  return (
    <Stack>
      <Text fontSize="xs" color="primary.300">
        Select Tip %
      </Text>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={3}
        color="secondary.300"
      >
        <ButtonPercent />
      </Grid>
    </Stack>
  );
}

export default SelectTip;
