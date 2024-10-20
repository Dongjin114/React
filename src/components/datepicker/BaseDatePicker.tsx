import dayjs from "dayjs";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "dayjs/locale/ko";

interface BaseDatePickerProps {
  name: string;
  date: any;
  changeDate: (value: any) => void;
}

export default function BaseDatePicker({
  name,
  date,
  changeDate,
}: BaseDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={name}
          slotProps={{ textField: { size: "small" } }}
          value={date}
          onChange={changeDate}
          sx={{ background: "white", borderRadius: "10px" }}
          views={["year", "month", "day"]}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
