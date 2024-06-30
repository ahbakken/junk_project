import { useState } from "react";
import Display from "../../components/display";
import Keyboard from "../../components/keyboardNumber";
import { calculateSum } from "./utils";
import SumButton from "../../components/sumButton";
import { Paper, Stack } from "@mantine/core";

export default function CalculatorSection() {
  const [sum, setSum] = useState(0);
  const [sumOfArray, setSumOfArray] = useState<string[]>([]);

  const handleAddNumber = (val: string) => {
    setSumOfArray((prev) => [...prev, String(val)]);
    setSum(calculateSum([...sumOfArray, String(val)]));
  };

  const handleSumClick = () => {
    setSum(calculateSum(sumOfArray));
  };

  const handleClear = () => {
    setSum(0);
    setSumOfArray([]);
  };

  return (
    <Paper
      shadow="xs"
      bg={"lightgrey"}
      style={{
        paddingTop: "0.5rem",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <Stack>
        <Display sum={sum} />
        <Keyboard handleAddNumber={handleAddNumber} handleClear={handleClear} />
        <SumButton handleSum={handleSumClick} />
      </Stack>
    </Paper>
  );
}
