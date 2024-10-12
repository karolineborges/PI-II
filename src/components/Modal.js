import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import FormVisit from "./FormVisit";

function Modal() {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpenModal} className="visit-button" style={{
                backgroundColor: "#305573", width:"20vw", color: "#d9e5ed", borderRadius: "4rem", border: "transparent" }}>
                Venha me fazer uma visita!
            </Button>
            <Dialog open={open} onClose={handleCloseModal}>
                <DialogTitle style={{ backgroundColor: "#305573", color:  "#d9e5ed", fontWeight: "bold"}}> Agendamento da visita</DialogTitle >
                <DialogContent style={{ marginTop: "5vw"}}>
                    <DialogContentText>
                        <FormVisit />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} className='buttonClose'>
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal;
