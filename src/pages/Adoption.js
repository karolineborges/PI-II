import "../styles/Adoption.css"
import React, {useState} from 'react';
import '../App.css';
import Modal from '../components/Modal.js';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddPet from "../components/AddPet.js";
import Carousel from "../components/Carousel.js";
import Filter from "../components/Filter.js";
import { searchPets } from "../db.js";


function Adoption() {
    sessionStorage.getItem("data");

    const [,setModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [pets, setPets] = useState(searchPets({
        name: '',
        specie: '',
        size: '',
        type: ''
    }));

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleOpenModal = (e) => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleReturnedPets = (pets) => {
        setPets(pets);
    };
    return (
        <div className="adoption">
            <div className="pets-home">
                <h2>Conheça os pets que estão em busca de um novo lar!</h2>
            </div>
            <Filter onFilter={handleReturnedPets} />
            <div className="carousel">
            {
                pets.length === 0 ? <p style={{margin: "11vh"}} key="" >Não foram encontrados pets para os filtros passados!</p> :
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
                    <div className="mini-cards"> <p>Conhece algum animalzinho que esteja aprecisando de abrigo temporário? Faça o cadastro dele <span onClick={handleOpenModal}>AQUI!</span></p></div> :                <div className="pets-actions">
                    <div className="pets-info">                        
                        <div className="pets-description">
                        </div>                        
                        <Modal closeModal={closeModal} />
                    </div>
                    <div className="mini-cards">
                        <Dialog open={open} onClose={handleCloseModal}>
                            <DialogTitle style={{ backgroundColor: "#305573", color: "#d9e5ed", fontWeight: "bold" }}> Sugestão de Pet </DialogTitle >
                            <DialogContent style={{ marginTop: "1vw" }}>
                                <AddPet IsSugestion={true} />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseModal} className='buttonClose'>
                                    Fechar
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <p>Conhece algum animalzinho que esteja aprecisando de abrigo temporário? Faça o cadastro dele <span onClick={handleOpenModal}>AQUI!</span></p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Adoption;