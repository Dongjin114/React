import { Margin } from "@mui/icons-material";
import { OrmState } from "../../types/enum/enums";
import { ColorButton } from "./BaseButton.style";

interface BaseButtonInterFace {
  buttonName?: any;
  color?: any;
  onClick?: () => void;
}

export default function BaseButton({
  buttonName,
  color,
  onClick,
}: BaseButtonInterFace) {
  const getButtonColor = (status: any) => {
    if (status in OrmState) {
      return status === buttonName ? "secondary" : "primary";
    } else {
      return status;
    }
  };

  return (
    <ColorButton
      variant="contained"
      color={getButtonColor(color)}
      size="medium"
      onClick={() => onClick && onClick()}
      style={{ width: 100, margin: 10 }}
    >
      {buttonName}
    </ColorButton>
  );
}
