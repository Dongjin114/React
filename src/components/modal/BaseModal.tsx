import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RowData } from "../../types/interface/RowData";
import * as ModalStyle from "./BaseModal.style";
import { useEffect, useState } from "react";
import { ColDef } from "ag-grid-community";
import BaseButton from "../button/BaseButton";
import { ButtonName, ButtonType, PostStatus } from "../../types/enum/enums";
import useRequestAPI, * as Request from "../../api/useRequestAPI";
import CloseIcon from "@mui/icons-material/Close";
import InputBoxContent from "../inputbox/InputBoxContent";
import * as FONT from "../../constants/font";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface BaseModalProps {
  openState: any;
  closeModal: () => void;
  rowData?: any;
  colDefs: ColDef[];
  postStatus: PostStatus;
}

export default function BaseModal({
  openState,
  closeModal,
  rowData,
  colDefs,
  postStatus,
}: BaseModalProps) {
  const [editRowData, setEditRowData] = useState(rowData);
  const getRowData = (data: any, field: any) => {
    return data[field];
  };
  const { requestGO } = useRequestAPI();

  useEffect(() => {
    setEditRowData(rowData);
  }, [rowData]);

  const handleChangeValue = (field: any, newValue: string) => {
    setEditRowData((prevData: RowData) => ({
      ...prevData,
      [field]: newValue,
    }));
  };

  const cancleEditChange = () => {
    setEditRowData(rowData);
    closeModal();
  };

  useEffect(() => {
    console.log("editRowData 변경", editRowData);
  }, [editRowData]);

  const handleDeleteChange = () => {
    console.log(editRowData);
    console.log("삭제실행");
  };

  const handleEditChange = () => {
    console.log("수정값 = ", editRowData);
    console.log("수정실행");
    requestGO();
    closeModal();
  };

  const renderButtons = () => {
    const EditButtons: ButtonName[] = [ButtonName.EDIT, ButtonName.DELETE];

    if (postStatus === PostStatus.CREATE) {
      return (
        <BaseButton
          buttonName={ButtonName.CREATE}
          color={ButtonType.INFO}
          onClick={handleEditChange}
        />
      );
    }

    if (postStatus === PostStatus.EDIT) {
      return EditButtons.map((name) => (
        <BaseButton
          buttonName={name}
          color={ButtonType.INFO}
          onClick={handleEditChange}
        />
      ));
    }
  };

  return (
    <div>
      <Modal
        open={openState}
        onClose={cancleEditChange}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalStyle.ModalContainer>
            <ModalStyle.HeaderContainer>
              <ModalStyle.Header>
                <Typography id="modal-modal-title" variant="h3" component="h2">
                  상세보기
                </Typography>
              </ModalStyle.Header>
              <ModalStyle.Close>
                <CloseIcon onClick={cancleEditChange} />
              </ModalStyle.Close>
            </ModalStyle.HeaderContainer>
            <Typography id="modal-modal-description" sx={{ lineHeight: 0.5 }}>
              <ModalStyle.DetailsContainer>
                <ModalStyle.MenuContainer>
                  <ModalStyle.MenuBoxes>
                    {colDefs.map((column, index) => (
                      <ModalStyle.MenuBox>
                        <InputBoxContent
                          holderFocusTranslateY={"-180"}
                          holderUnFocusTranslateY={"30"}
                          holderFocusFont={FONT.L}
                          holderUnFocusFont={FONT.S}
                          ContextHolder={column.field}
                          text={
                            editRowData
                              ? getRowData(editRowData, column.field)
                              : ""
                          }
                          onChange={(e) =>
                            handleChangeValue(column.field, e.target.value)
                          }
                          width={350}
                          height={40}
                        />
                      </ModalStyle.MenuBox>
                    ))}
                  </ModalStyle.MenuBoxes>
                </ModalStyle.MenuContainer>

                <ModalStyle.ButtonContainer>
                  {renderButtons()}
                </ModalStyle.ButtonContainer>
              </ModalStyle.DetailsContainer>
            </Typography>
          </ModalStyle.ModalContainer>
        </Box>
      </Modal>
    </div>
  );
}
