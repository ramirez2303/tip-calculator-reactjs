import {
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import dolar from "../image/icon-dollar.svg";

function Bill() {
  return (
    <Stack spacing={1}>
      <Heading fontSize="xs" color="primary.300">
        Bill
      </Heading>
      <Stack>
        <InputGroup bgColor="gray.100" borderRadius="lg">
          <InputLeftElement h="50px" children={<Image src={dolar} w={2} />} />
          <Input
            h="50px"
            textAlign="right"
            type="number"
            color="primary.200"
            fontSize="sm"
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
