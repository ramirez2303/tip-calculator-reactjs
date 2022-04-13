import { Stack } from "@chakra-ui/react";
import CalculateSection from "./components/CalculateSection";
import HeadingTittle from "./components/HeadingTittle";

function App() {
  return (
    <Stack spacing={0} h="100vh">
      <Stack h="130px" justifyContent="center" alignItems="center" spacing={0}>
        <HeadingTittle />
      </Stack>
      <Stack bgColor="secondary.300" h="100%" borderRadius="25px 25px 0 0">
        <CalculateSection />
      </Stack>
    </Stack>
  );
}

export default App;
