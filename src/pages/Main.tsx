import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import * as MainStyle from "./Main.style";
import AgGrid from "../components/aggrid/AgGrid";
import { ButtonName, ButtonType, PostStatus } from "../types/enum/enums";
import BaseButton from "../components/button/BaseButton";
import BaseModal from "../components/modal/BaseModal";
import { ColDef } from "ag-grid-community";
import dayjs, { Dayjs } from "dayjs";
import BaseDatePicker from "../components/datepicker/BaseDatePicker";
import InputBoxContent from "../components/inputbox/InputBoxContent";
import * as FONT from "../constants/font";

const columNames: ColDef[] = [
  { field: "id" },
  { field: "make" },
  { field: "model" },
  { field: "price" },
];

const data = [
  { id: "c1", make: "Toyota", model: "Celica", price: 35000 },
  { id: "c2", make: "Ford", model: "Mondeo", price: 32000 },
  { id: "c8", make: "Porsche", model: "Boxster", price: 72000 },
  { id: "c4", make: "BMW", model: "M50", price: 60000 },
  { id: "c14", make: "Aston Martin", model: "DBX", price: 190000 },
];

const menuNames = [
  { name: "입력값1" },
  { name: "입력값2" },
  { name: "입력값3" },
];

function Main() {
  const [postStatus, setPostStatus] = useState<PostStatus>(PostStatus.NONE);

  const [open, setOpen] = useState(false);

  const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs());

  const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs());

  const changePostStatus = (status: PostStatus) => setPostStatus(status);

  const openModal = () => {
    setOpen(true);
    changePostStatus(PostStatus.CREATE);
  };

  const closeModal = () => {
    setOpen(false);
    changePostStatus(PostStatus.NONE);
  };

  const hadleSearchChange = () => {
    console.log("찾기");
  };

  useEffect(() => {
    console.log("postStatus=", postStatus);
  }, [postStatus]);

  return (
    <MainStyle.MainContainer>
      <MainStyle.NavContainer>
        <Nav />
      </MainStyle.NavContainer>
      <MainStyle.BodyContainer>
        <MainStyle.ButtonContainer>
          <BaseButton
            color={ButtonType.PRIMARY}
            buttonName={ButtonName.CREATE}
            onClick={openModal}
          />
          <BaseButton
            color={ButtonType.PRIMARY}
            buttonName={ButtonName.SEARCH}
            onClick={hadleSearchChange}
          />
        </MainStyle.ButtonContainer>
        <MainStyle.BodyHeaderContainer>
          <MainStyle.DatePickerContainer>
            <MainStyle.DatePicker>
              <BaseDatePicker
                name={"시작일"}
                date={startDate}
                changeDate={(value) => setStartDate(value)}
              />
            </MainStyle.DatePicker>
            <MainStyle.DatePicker>
              <BaseDatePicker
                name={"마지막일"}
                date={endDate}
                changeDate={(value) => setEndDate(value)}
              />
            </MainStyle.DatePicker>
          </MainStyle.DatePickerContainer>
          <MainStyle.BodyHeaderMenuBox>
            <MainStyle.MenuBoxContainer>
              {menuNames.map((value) => (
                <MainStyle.MenuBox>
                  <InputBoxContent
                    holderFocusTranslateY={"-120"}
                    holderUnFocusTranslateY={"-10"}
                    ContextHolder={value.name}
                    holderFocusFont={FONT.M}
                    holderUnFocusFont={FONT.XXS}
                    width={180}
                    height={30}
                  />
                  <InputBoxContent
                    holderFocusTranslateY={"-120"}
                    holderUnFocusTranslateY={"-10"}
                    ContextHolder={value.name}
                    holderFocusFont={FONT.M}
                    holderUnFocusFont={FONT.XXS}
                    width={180}
                    height={30}
                  />
                </MainStyle.MenuBox>
              ))}
            </MainStyle.MenuBoxContainer>
          </MainStyle.BodyHeaderMenuBox>
        </MainStyle.BodyHeaderContainer>
        <MainStyle.GridContainer>
          <AgGrid
            width={800}
            height={400}
            postStatus={postStatus}
            changeStatus={changePostStatus}
            data={data}
            columNames={columNames}
          />
        </MainStyle.GridContainer>
        <BaseModal
          openState={open}
          closeModal={closeModal}
          colDefs={columNames}
          postStatus={postStatus}
        />
      </MainStyle.BodyContainer>
    </MainStyle.MainContainer>
  );
}

export default Main;
