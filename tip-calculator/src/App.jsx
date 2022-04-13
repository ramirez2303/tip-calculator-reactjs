import { Heading, Stack, Text } from "@chakra-ui/react";
import CalculateSection from "./components/CalculateSection";

function App() {
  return (
    <Stack spacing={0} h="100%">
      <Stack h="20vh" justifyContent="center" alignItems="center" spacing={0}>
        <Heading fontSize="sm" color="primary.200" letterSpacing={8}>
          SPLI
        </Heading>
        <Heading fontSize="sm" color="primary.200" letterSpacing={8}>
          TTER
        </Heading>
      </Stack>
      <Stack
        bgColor="secondary.300"
        h="80vh"
        borderRadius="25px 25px 0 0"
      >
        <CalculateSection />
      </Stack>
    </Stack>
  );
}

export default App;
