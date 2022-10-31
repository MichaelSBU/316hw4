import { useContext, useState } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleCloseButton() {
        store.hideModals();
    }

    return (
        <Modal open = {store.currentModal == "ERROR"}>
        <Box sx={style}>
         <Alert severity="warning">This is an error alert!</Alert>
         <Button variant="outlined" onClick={handleCloseButton}>Close</Button>
         </Box>
        </Modal>
    );
}