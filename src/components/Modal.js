import React, { useState } from 'react';
import FormVisit from "./FormVisit";
import Modal from "../components/ModalQuestion.js";

function ModalForm() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <button type="button" onClick={openModal} className="visit-button" style={{
                backgroundColor: "#305573", width: "20vw", padding: "1rem", color: "#d9e5ed", borderRadius: "4rem", border: "transparent"
            }}>
                Venha me fazer uma visita!
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <>
                    <FormVisit />
                </>
            </Modal>
        </div>
    );
}

export default ModalForm;