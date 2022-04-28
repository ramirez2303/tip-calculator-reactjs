import {
  Text,
  Image,
  InputGroup,
  InputLeftElement,
  Stack,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import React from "react";
import dolarIcon from "../image/icon-dollar.svg";

function Bill({ handleBillInput }) {
  return (
    <Stack spacing={1}>
      <Text
        fontSize={{ base: "xs", sm: "xs", md: "small", lg: "small" }}
        color="primary.300"
      >
        Bill
      </Text>
      <Stack>
        <InputGroup bgColor="gray.100" borderRadius="lg" w="100%">
          <InputLeftElement
            h={{ base: "50px", sm: "50px", md: "40px", lg: "40px" }}
            children={<Image src={dolarIcon} w={2} />}
          />
          <NumberInput w="100%">
            <NumberInputField
              h={{ base: "50px", sm: "50px", md: "40px", lg: "40px" }}
              textAlign="right"
              onChange={handleBillInput}
              color="primary.200"
              fontSize="sm"
              placeholder="000.00"
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
          </NumberInput>
        </InputGroup>
      </Stack>
    </Stack>
  );
}

export default Bill;
