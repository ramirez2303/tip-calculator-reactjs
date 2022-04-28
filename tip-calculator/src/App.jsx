import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import CalculateSection from "./components/CalculateSection";
import HeadingTittle from "./components/HeadingTittle";
import Visualization from "./components/Visualization";

function App() {
  const [bill, setBill] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [percentage, setPercentage] = useState("");
  const [customPercentage, setCustomPercentage] = useState(0);
  const [TipAmount, setTipAmount] = useState("0");

  const handleBillInput = (e) => {
    setBill(e.target.value);
    handleTipAmount();
  };

  const handlePeopleInput = (e) => {
    setPeopleNumber(e.target.value);
    handleTipAmount();
  };

  const handleSelectTip = (i) => {
    setPercentage(i);
  };

  const handleCustomPercentageInput = (e) => {
    setCustomPercentage(e.target.value);
  };

  const handleTipAmount = () => {
    if (!bill || !peopleNumber) {
      setTipAmount(0)
    }
    if (!percentage || !customPercentage) {
      setTipAmount(parseInt(bill) / parseInt(peopleNumber));
    } else if (customPercentage) {
      setTipAmount(parseInt((bill * 1) / peopleNumber));
    } else {
      setTipAmount(parseInt((bill * 1) / peopleNumber));
    }
  };

  return (
    <Stack
      spacing={{ base: "0", sm: "0", md: "4", lg: "4" }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack h="130px" justifyContent="center" alignItems="center" spacing={0}>
        <HeadingTittle />
      </Stack>
      <Stack
        paddingY={{ base: "6", sm: "6", md: "4", lg: "4" }}
        paddingX={{ base: "6", sm: "6", md: "4", lg: "4" }}
        spacing={4}
        bgColor="secondary.300"
        w={{ base: "auto", sm: "auto", md: "800px", lg: "800px" }}
        h={{ base: "100%", sm: "100%", md: "380px", lg: "380px" }}
        borderRadius={{
          base: "25px 25px 0 0",
          sm: "25px 25px 0 0",
          md: "25px 25px 25px 25px",
          lg: "25px 25px 25px 25px",
        }}
        direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <Stack w={{ base: "auto", sm: "auto", md: "50%", lg: "50%" }}>
          <CalculateSection
            handleBillInput={handleBillInput}
            handlePeopleInput={handlePeopleInput}
            handleSelectTip={handleSelectTip}
            handleCustomPercentageInput={handleCustomPercentageInput}
          />
        </Stack>
        <Stack w={{ base: "auto", sm: "auto", md: "50%", lg: "50%" }}>
          <Visualization TipAmount={TipAmount} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
