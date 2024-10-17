import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal, { ModalOwnProps } from '@mui/material/Modal';
import { rowColums, rowData } from '../../types/RowData';
import * as MODALSTYLE from './BaseModal.style'
import { useEffect, useState } from 'react';
import { _setAriaRowIndex, ColDef } from 'ag-grid-community';
import BaseButton from '../button/BaseButton';
import { MUIBUTTONTYPE } from '../../constants/enums';
import useRequestAPI, * as Request from '../../api/useRequestAPI';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface BaseModalIF {
    openState: any,
    closeModal: () => void,
    rowData: rowData,
    colDefs: ColDef[]
}

export default function BaseModal({ openState, closeModal, rowData, colDefs }: BaseModalIF) {

    const [editRowData, setEditRowData] = useState(rowData);
    const getRowData = (data: any, field: any) => { return data[field] }
    const { requestGO } = useRequestAPI();

    useEffect(() => {
        setEditRowData(rowData);
    }, [rowData])

    const handleChangeValue = (field: any, newValue: string) => {
        setEditRowData((prevData) => ({
            ...prevData,
            [field]: newValue
        }))
    }

    const handleDeleteChange = () => {

        console.log(editRowData);
        console.log("삭제실행");

    }

    const handleEditChange = () => {
        console.log(editRowData);
        console.log("수정실행");
        requestGO();
        closeModal();

    }

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
                        <Typography id="modal-modal-title" variant="h3" component="h2">
                            상세보기
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <MODALSTYLE.DetailsContainer>
                                {colDefs.map((column, index) => (
                                    <MODALSTYLE.MenuContainer>
                                        <MODALSTYLE.MenuName>
                                            {column.field}
                                        </MODALSTYLE.MenuName>
                                        <MODALSTYLE.MenuValue>
                                            <input
                                                value={getRowData(editRowData, column.field)}
                                                onChange={(e) => handleChangeValue(column.field, e.target.value)}
                                            />
                                        </MODALSTYLE.MenuValue>
                                    </MODALSTYLE.MenuContainer>
                                ))}
                                <BaseButton buttonName={'수정'} color={MUIBUTTONTYPE.info}
                                    onClick={handleEditChange}
                                />
                                <BaseButton buttonName={'삭제'} color={MUIBUTTONTYPE.info}
                                    onClick={handleDeleteChange}
                                />
                            </MODALSTYLE.DetailsContainer>
                        </Typography>
                    </MODALSTYLE.ModalContainer>
                </Box>
            </Modal>
        </div>
    );
}