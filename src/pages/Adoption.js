import "../styles/Adoption.css"
import "../styles/Modal.css"
import React, { useState } from 'react';
import '../App.css';
import AddPet from "../components/AddPet.js";
import Carousel from "../components/Carousel.js";
import Filter from "../components/Filter.js";
import { searchPets } from "../db.js";
import ModalForm from "../components/ModalQuestion.js";
import Modal from "../components/Modal.js";


function Adoption() {
    sessionStorage.getItem("data");

    const [pets, setPets] = useState(searchPets({
        name: '',
        specie: '',
        size: '',
        type: ''
    }));

    const handleReturnedPets = (pets) => {
        setPets(pets);
    };
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="adoption">
            <header className="pets-home">
                <h2>Conheça os pets que estão em busca de um novo lar!</h2>
            </header>
            <Filter onFilter={handleReturnedPets} />
            <div className="carousel">
                {
                    pets.length === 0 ? <p style={{ margin: "11vh" }} key="" >Não foram encontrados pets para os filtros passados!</p> :
                        <Carousel pets={pets}>
                            {
                                pets.map((pet) =>
                                    <img src={pet.image} value={pet.id} key={pet.id} alt={pet.name} />
                                )
                            }
                        </Carousel>
                }
            </div>
            {
                pets.length === 0 ?
                    <div className="mini-cards"> <p>Conhece algum animalzinho que esteja aprecisando de abrigo temporário? Faça o cadastro dele <span onClick={openModal}>AQUI!</span></p></div> : <div className="pets-actions">
                        <div className="pets-info">
                            <div className="pets-description">
                            </div>
                            <Modal closeModal={closeModal} />
                        </div>
                        <div className="mini-cards">
                            <ModalForm isOpen={isModalOpen} onClose={closeModal}>
                                <>
                                    <AddPet IsSugestion={true} />
                                </>
                            </ModalForm>
                            <p>Conhece algum animalzinho que esteja aprecisando de abrigo temporário? Faça o cadastro dele <span onClick={openModal}>AQUI!</span></p>
                        </div>

                    </div>
            }
        </div>
    );
}

export default Adoption;