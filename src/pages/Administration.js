import React, { useState } from 'react';
import "../styles/Administration.css"
import ModalAction from "../components/ModalAction.js";
import AddPet from "../components/AddPet.js";
import { addSugestion, removeSugestion } from "../db.js"
import ModalForm from "../components/ModalQuestion.js";

function Administration() {
    const [data, setData] = useState(JSON.parse(sessionStorage.getItem("data")));
    const [button, setButton] = useState("");

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleClick = (e) => {
        setButton(e.target.id);

        setData(JSON.parse(sessionStorage.getItem("sugestion")));
    }

    const handleSugestion = (index, event) => {
        let action = event.target.id;

        if (action === "delete-sugestion") {
            removeSugestion(index);
        } else {
            addSugestion(index);
        }
        let petsSugestionDB = JSON.parse(sessionStorage.getItem("sugestion"));
        setData(petsSugestionDB);
    }

    const handleList = () => {
        let petsDB = JSON.parse(sessionStorage.getItem("data"));
        setButton("");
        setData(petsDB);
    }

    return (
        <div className="adm">
            <header>
                <h1>Ações de Administrador</h1>
            </header>
            <div style={{ display: "flex" }}>

                <button type="button" onClick={handleList} className="buttonClose" style={{
                    backgroundColor: "#305573", width: "20vw", color: "#d9e5ed", borderRadius: "4rem", margin: "1vw 1vw 0 0", border: "transparent"
                }}>
                    LISTAR PETS
                </button>

                <button type="button" onClick={openModal} className="buttonClose" style={{
                    backgroundColor: "#305573", width: "20vw", color: "#d9e5ed", borderRadius: "4rem", margin: "1vw 1vw 0 0", border: "transparent"
                }}>
                    ADICIONAR PET
                </button>

                <button type="button" onClick={handleClick} className="buttonClose" style={{
                    backgroundColor: "#305573", width: "20vw", color: "#d9e5ed", borderRadius: "4rem", margin: "1vw 0 0 0", border: "transparent"
                }}>
                    VERIFICAR SUGESTÕES
                </button>
            </div>
            <ModalForm isOpen={isModalOpen} onClose={closeModal}>
                <>
                    <AddPet />
                </>
            </ModalForm>
            <section className="actions">
                <table className="petList" role="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Espécie</th>
                            <th>Sexo</th>
                            <th>Castrado</th>
                            <th>Vacinado</th>
                            <th>Porte</th>
                            <th>Foto</th>
                            <th>Ações</th>
                            <th>OBS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((pet, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{pet.name}</td>
                                    <td>{pet.age}</td>
                                    <td>{pet.specie}</td>
                                    <td>{pet.sex}</td>
                                    <td>{pet.castrated}</td>
                                    <td>{pet.vaccinated}</td>
                                    <td>{pet.size}</td>
                                    <td><img className='photo-table' src={pet.image} alt={pet.name}/></td>
                                    {
                                        button !== "sugestion" ?
                                            <td className="actions-icons">
                                                <ModalAction index={index}></ModalAction>
                                            </td> :
                                            <td>
                                                <svg aria-label="Adicionar sugestão" id='add-sugestion' onClick={(event) => handleSugestion(index, event)} width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Adicionar</title>

                                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                    <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </g>

                                                </svg>
                                                <svg aria-label="Excluir sugestão" id='delete-sugestion' onClick={(event) => handleSugestion(index, event)} fill="#000000" height="12px" width="16px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.607 180.607" style={{ marginBottom: "0.4vw", marginLeft: "0.3vw" }}>
                                                    <title>Excluir</title>

                                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                                    <g id="SVGRepo_iconCarrier"> <path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607 L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z" /> </g>

                                                </svg>
                                            </td>
                                    }
                                    <td title={pet.obs}>
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "0.33vw", marginLeft: "0.3vw" }}>

                                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                            <g id="SVGRepo_iconCarrier"> <path d="M7 8H17M7 12H17M9 16H15M4 4H20V20H4V4Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g>

                                        </svg>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Administration;