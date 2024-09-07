import { useState } from "react";
import Display from "../../components/display";
import Keyboard from "../../components/keyboardNumber";
import { calculateSum } from "./utils";
import SumButton from "../../components/sumButton";
import { Paper, Stack, Title } from "@mantine/core";

export default function CalculatorSection() {
  const [display, setDisplay] = useState("0");
  const [sumOfArray, setSumOfArray] = useState<string[]>([]);

  const handleAddNumber = (val: string) => {
    setSumOfArray((prev) => [...prev, String(val)]);
    setDisplay((prev) => prev + val);
  };

  const handleSumClick = () => {
    setDisplay(String(calculateSum(sumOfArray)));
  };

  const handleClear = () => {
    setSumOfArray([]);
    setDisplay("0");
  };

  return (
    <Stack>
      <Title order={1} style={{ marginTop: "7rem" }}>
        Calculator
      </Title>
      <Paper
        shadow="xs"
        bg={"lightgrey"}
        style={{
          padding: "2rem",
          width: "100%",
          margin: "2rem",
        }}
      >
        <Stack>
          <Display sum={display} />
          <Keyboard
            handleAddNumber={handleAddNumber}
            handleClear={handleClear}
          />
          <SumButton handleSum={handleSumClick} />
        </Stack>
      </Paper>
    </Stack>
  );
}
