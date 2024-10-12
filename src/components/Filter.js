import { useState } from "react";
import { searchPets } from "../db.js";
import "../styles/Filter.css"

function Filter({onFilter}){
    const [dataSearch, setDataSearch] = useState({
        name: '',
        specie: '',
        size: '',
        type: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataSearch(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const pets = searchPets(dataSearch);
        onFilter(pets);
    }

    return(
            <div className="search-pet">
                <h3>Galeria de pets</h3>
                <form className="form-search" onSubmit={handleSubmit} aria-label="Formulário de Busca de Pets">
                    <div className="filters">
                        <div className="filter">
                            <label htmlFor="name"> Nome do Pet </label>
                            <input type="text" name="name" value={dataSearch.name} onChange={handleChange} />
                        </div>
                        <div className="filter">
                            <label htmlFor="type"> Sexo </label>
                            <select name="type" onChange={handleChange}>
                                <option defaultValue="" value="">Selecione uma opção</option>
                                <option value="FÊMEA">Fêmea</option>
                                <option value="MACHO">Macho</option>
                            </select>
                        </div>
                        <div className="filter">
                            <label htmlFor="specie"> Espécie </label>
                            <select onChange={handleChange} name="specie" >
                                <option defaultValue="" value="">Selecione uma opção</option>
                                <option value="CÃO">CÃO</option>
                                <option value="GATO">GATO</option>
                            </select>
                        </div>
                        <div className="filter">
                            <label htmlFor="size"> Porte </label>
                            <select id='last' onChange={handleChange} name="size" >
                                <option defaultValue="" value="">Selecione uma opção</option>
                                <option value="PEQUENO">PEQUENO</option>
                                <option value="MÉDIO">MÉDIO</option>
                                <option value="GRANDE">GRANDE</option>
                            </select>
                        </div>
                    </div>
                    <div className='submit-search'>
                        <button type="submit" variant="contained" style={{
                            backgroundColor: '#f9d13b', color: '#454c41', marginTop: "2vw", marginBottom: "1vw",
                            width: "5vw", padding: "1rem", borderRadius: "0.5rem", border: "transparent"
                        }}>
                            BUSCAR
                        </button>
                    </div>
                </form>
            </div>
        );
}

export default Filter;