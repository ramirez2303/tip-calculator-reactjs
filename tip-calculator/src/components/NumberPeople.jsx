import {
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Image,
} from "@chakra-ui/react";
import React from "react";
import personIcon from "../image/icon-person.svg";

function NumberPeople() {
  return (
    <Stack spacing={1}>
      <Text fontSize="xs" color="primary.300">
        Number of People
      </Text>
      <Stack>
        <InputGroup bgColor="gray.100" borderRadius="lg">
          <InputLeftElement
            h="50px"
            children={<Image src={personIcon} w={2} />}
          />
          <Input
            h="50px"
            textAlign="right"
            type="number"
            color="primary.200"
            fontSize="sm"
            placeholder="0"
            border="none"
            _active={{
              outline: "none",
              border: "2px solid",
              borderColor: "primary.100",
            }}
            _focus={{
              outline: "none",
              border: "2px solid",
              borderColor: "primary.100",
            }}
          />
        </InputGroup>
      </Stack>
    </Stack>
  );
}

export default NumberPeople;
