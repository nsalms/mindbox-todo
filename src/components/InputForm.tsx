import { IconButton, InputBase } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

type Props = {
  onSubmit: (title: string) => void;
};

export default function InputForm({ onSubmit }: Props) {
  const [value, setValue] = useState("");

  // Обработчик отправки
  const handleSubmit = () => {
    onSubmit(value.trim());
    setValue("");
  };

  return (
    <>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        onClick={handleSubmit}
        // disabled={value == ""}
        color={"primary"}
        title={"Submit"}
      >
        <SendIcon />
      </IconButton>
    </>
  );
}
