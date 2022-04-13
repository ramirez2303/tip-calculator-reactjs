import {
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import dolarIcon from "../image/icon-dollar.svg";

function Bill() {
  return (
    <Stack spacing={1}>
      <Text fontSize="xs" color="primary.300">
        Bill
      </Text>
      <Stack>
        <InputGroup bgColor="gray.100" borderRadius="lg">
          <InputLeftElement h="50px" children={<Image src={dolarIcon} w={2} />} />
          <Input
            h="50px"
            textAlign="right"
            type="number"
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
        </InputGroup>
      </Stack>
    </Stack>
  );
}

export default Bill;
