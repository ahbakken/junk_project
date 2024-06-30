import { Button } from "@mantine/core";

interface SumButtonProps {
  handleSum: () => void;
}

const SumButton: React.FC<SumButtonProps> = ({ handleSum }) => {
  return <Button onClick={handleSum}>Sum</Button>;
};

export default SumButton;
