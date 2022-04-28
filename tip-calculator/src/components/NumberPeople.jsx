import {
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Image,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import React from "react";
import personIcon from "../image/icon-person.svg";

function NumberPeople({ handlePeopleInput }) {
  return (
    <Stack spacing={1}>
      <Text
        fontSize={{ base: "xs", sm: "xs", md: "small", lg: "small" }}
        color="primary.300"
      >
        Number of People
      </Text>
      <Stack>
        <InputGroup bgColor="gray.100" borderRadius="lg">
          <InputLeftElement
            h={{ base: "50px", sm: "50px", md: "40px", lg: "40px" }}
            children={<Image src={personIcon} w={2} />}
          />
          <NumberInput w="100%">
            <NumberInputField
              h={{ base: "50px", sm: "50px", md: "40px", lg: "40px" }}
              textAlign="right"
              color="primary.200"
              fontSize="sm"
              placeholder="0"
              border="none"
              onChange={handlePeopleInput}
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
          </NumberInput>
        </InputGroup>
      </Stack>
    </Stack>
  );
}

export default NumberPeople;
