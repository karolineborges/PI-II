import '../styles/Carousel.css';
import React from 'react';
import { useState, useEffect } from "react";


function Carousel({ pets, children }){
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    let pet = null;
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
            pet = pets[currentIndex - 1];
        }
        else {
            setCurrentIndex(length - 1);
            pet = pets[length - 1];
        }
        getDescription();
    }

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1);
            pet = pets[currentIndex + 1];
        }
        else {
            setCurrentIndex(0);
            pet = pets[0];
        }
        getDescription();
    }

    const getDescription = () => {
        if(pets.length > 0)
        {
            document.querySelector(".pets-description").innerHTML = `Olá, Visitante! Meu nome é ${pet.name.toUpperCase()}. Espécie: ${pet.specie}. Sexo: ${pet.sex}. Idade: ${pet.age}. Porte: ${pet.size} Vacinado(a): ${pet.vaccinated}. Castrado(a): ${pet.castrated}. ${pet.obs == "" ? "" : `OBS: ${pet.obs}`}`;
        }
    }

    useEffect(() => {
        setLength(children.length);
        pet = pets[0];
        document.querySelector(".pets-description").innerHTML = `Olá, Visitante! Meu nome é ${pet.name.toUpperCase()}. Espécie: ${pet.specie}. Sexo: ${pet.sex}. Idade: ${pet.age}. Porte: ${pet.size} Vacinado(a): ${pet.vaccinated}. Castrado(a): ${pet.castrated}. ${pet.obs == "" ? "" : `OBS: ${pet.obs}`}`;
    }, [children]);

    return (
        <div className="carousel-container">
            <div className="carousel-group">
                { pets.length === 0 ? "" :
                    <button onClick={prev} className="left">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 5.70711C13.0976 5.31658 13.0976 4.68342 12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289L4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071C13.0976 19.3166 13.0976 18.6834 12.7071 18.2929L6.41421 12L12.7071 5.70711ZM19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711Z" fill="#f9d13b" />
                        </svg>
                    </button>
                }
                <div className="carousel-content-group">
                    <div className="carousel-group">
                        <div className="carousel-content-group">
                            <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                {pets.length === 0 ? "" :
                    <button onClick={next} className="right">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L5.70711 4.29289ZM12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L17.5858 12L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L12.7071 4.29289Z" fill="#f9d13b" />
                        </svg>
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel;