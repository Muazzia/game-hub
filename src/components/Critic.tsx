import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const Critic = ({ score }: Props) => {
  const color = score > 80 ? "green" : score > 60 ? "yellow" : "red";

  return <Badge colorScheme={color}>{score}</Badge>;
};

export default Critic;
