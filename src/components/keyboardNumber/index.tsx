import { Button, Paper, Flex } from "@mantine/core";

interface KeyboardProps {
  handleAddNumber: (val: string) => void;
  handleClear: () => void;
}

const Keyboard: React.FC<KeyboardProps> = ({
  handleAddNumber,
  handleClear,
}) => {
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    "0",
    "+",
    "x",
    "/",
    "C",
  ];

  return (
    <Paper shadow="xs" p="xl" bg={"grey"}>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Flex
            key={i}
            mih={50}
            gap="md"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            {numbers.slice(i * 3, i * 3 + 3).map((number) => (
              <Button
                key={number}
                onClick={() =>
                  number == "C" ? handleClear() : handleAddNumber(number)
                }
              >
                {number}
              </Button>
            ))}
          </Flex>
        ))}
    </Paper>
  );
};

export default Keyboard;
