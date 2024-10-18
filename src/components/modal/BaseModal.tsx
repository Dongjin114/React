import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal, { ModalOwnProps } from "@mui/material/Modal";
import { rowColums, rowData } from "../../types/RowData";
import * as MODALSTYLE from "./BaseModal.style";
import { useEffect, useState } from "react";
import { _setAriaRowIndex, ColDef } from "ag-grid-community";
import BaseButton from "../button/BaseButton";
import { MUIBUTTONTYPE } from "../../constants/enums";
import useRequestAPI, * as Request from "../../api/useRequestAPI";
import CloseIcon from '@mui/icons-material/Close';
import InputBox from "../inputbox/InputBoxContent";
import InputBoxContent from "../inputbox/InputBoxContent";

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

interface BaseModalIF {
    openState: any;
    closeModal: () => void;
    rowData: rowData;
    colDefs: ColDef[];
}

export default function BaseModal({
    openState,
    closeModal,
    rowData,
    colDefs,
}: BaseModalIF) {
    const [editRowData, setEditRowData] = useState(rowData);
    const getRowData = (data: any, field: any) => {
        return data[field];
    };
    const { requestGO } = useRequestAPI();

    useEffect(() => {
        setEditRowData(rowData);
    }, [rowData]);

    const handleChangeValue = (field: any, newValue: string) => {
        setEditRowData((prevData) => ({
            ...prevData,
            [field]: newValue,
        }));
    };

    useEffect(() => {
        console.log("editRowData 변경", editRowData)
    }, [editRowData])

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

    return (
        <div>
            <Modal
                open={openState}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <MODALSTYLE.ModalContainer>
                        <MODALSTYLE.HeaderContainer>
                            <MODALSTYLE.Header>
                                <Typography id="modal-modal-title" variant="h3" component="h2">
                                    상세보기
                                </Typography>
                            </MODALSTYLE.Header>
                            <MODALSTYLE.Close>
                                <CloseIcon onClick={closeModal} />
                            </MODALSTYLE.Close>
                        </MODALSTYLE.HeaderContainer>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <MODALSTYLE.DetailsContainer>
                                <MODALSTYLE.MenuContainer>
                                    {colDefs.map((column, index) => (
                                        <MODALSTYLE.MenuBox>
                                            <InputBoxContent
                                                ContextHolder={column.field}
                                                text={getRowData(editRowData, column.field)}
                                                onChange={(e) => handleChangeValue(column.field, e.target.value)}
                                            />
                                        </MODALSTYLE.MenuBox>
                                    ))}
                                </MODALSTYLE.MenuContainer>
                                <MODALSTYLE.ButtonContainer>
                                    <BaseButton
                                        buttonName={"수정"}
                                        color={MUIBUTTONTYPE.info}
                                        onClick={handleEditChange}
                                    />
                                    <BaseButton
                                        buttonName={"삭제"}
                                        color={MUIBUTTONTYPE.info}
                                        onClick={handleDeleteChange}
                                    />
                                    <BaseButton
                                        buttonName={"등록"}
                                        color={MUIBUTTONTYPE.info}
                                        onClick={handleDeleteChange}
                                    />
                                </MODALSTYLE.ButtonContainer>
                            </MODALSTYLE.DetailsContainer>
                        </Typography>
                    </MODALSTYLE.ModalContainer>
                </Box>
            </Modal>
        </div >
    );
}
