import React from "react";
import { Link, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Filters } from "../utils/types";

type Props = {
  remainingCount: number;
  activeFilter?: Filters;
  switchFilter: (filter: Filters) => void;
  clearCompleted: () => void;
};

export default function TopBar({
  remainingCount,
  activeFilter = Filters.ALL,
  switchFilter,
  clearCompleted,
}: Props) {
  // Логика переключения фильтра
  const handleFilter = (
    event: React.MouseEvent<HTMLElement>,
    newValue: Filters
  ) => {
    switchFilter(newValue);
  };

  return (
    <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
      {/*Количество оставщихся дел*/}
      <Typography
        variant="overline"
        flex={1}
        children={remainingCount + " items left"}
      />

      {/*Выбор фильтра*/}
      <ToggleButtonGroup
        value={activeFilter}
        exclusive
        onChange={handleFilter}
        aria-label="text alignment"
        size="small"
      >
        <ToggleButton value={Filters.ALL}>All</ToggleButton>
        <ToggleButton value={Filters.ACTIVE}>Active</ToggleButton>
        <ToggleButton value={Filters.COMPLETED}>Completed</ToggleButton>
      </ToggleButtonGroup>

      {/*Кнопка Clear completed*/}
      <Typography variant="overline" textAlign={"right"} flex={1}>
        <Link
          component="button"
          variant="overline"
          underline="hover"
          color="inherit"
          onClick={() => clearCompleted()}
        >
          Clear completed
        </Link>
      </Typography>
    </Stack>
  );
}
