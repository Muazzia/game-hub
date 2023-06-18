import { GiBullseye } from "react-icons/gi";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BiMeh } from "react-icons/bi";

interface Props {
  number: number;
}

const Emoji = ({ number }: Props) => {
  const map: { [key: number]: any } = {
    5: { val: <GiBullseye color="red" /> },
    4: { val: <BsFillHandThumbsUpFill /> },
    3: { val: <BiMeh /> },
  };

  return map[number].val;
};

export default Emoji;
