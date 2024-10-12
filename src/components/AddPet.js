import { Button } from '@mui/material';
import React, { useState } from 'react';
import { addPet, addSugestionPet } from '../db';

function AddPet({IsSugestion}){
    const [dataForm, setDataForm] = useState({
        name: '',
        age: '',
        vaccinated: '',
        castrated: '',
        sex: '',
        id: '',
        obs: '',
        image: '',
        size: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (e.target.files)
        {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setDataForm(prevState => ({
                    ...prevState,
                    image: reader.result,
                }));
            };
        }

        setDataForm(prevState => ({
            ...prevState,
            [name]: value
        }));        
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (IsSugestion)
            addSugestionPet(dataForm);
        else
            addPet(dataForm);

        window.location.reload();
    };

    return(
        <form onSubmit={handleSubmit} className='formVisit'>
            <div>
                <div>
                    <label htmlFor="name"> Nome do Pet </label>
                    <input type="text" name="name" value={dataForm.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="age"> Idade </label>
                    <input type="text" name="age" value={dataForm.age} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="sex"> Sexo </label>
                    <select onChange={handleChange} name="sex" required >
                        <option defaultValue >Selecione uma opção</option>
                        <option value="FÊMEA">Fêmea</option>
                        <option value="MACHO">Macho</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="size"> Porte </label>
                    <select onChange={handleChange} name="size" required value={dataForm.size}>
                        <option >Selecione uma opção</option>
                        <option value="PEQUENO">Pequeno</option>
                        <option value="MÉDIO">Médio</option>
                        <option value="GRANDE">Grande</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="vaccinated"> Vacinado </label>
                    <select onChange={handleChange} name="vaccinated" required >
                        <option defaultValue >Selecione uma opção</option>
                        <option value="SIM">Sim</option>
                        <option value="NÃO">Não</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="castrated"> Castrado </label>
                    <select onChange={handleChange} name="castrated" required >
                        <option defaultValue >Selecione uma opção</option>
                        <option value="SIM">Sim</option>
                        <option value="NÃO">Não</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="obs"> Observação </label>
                    <input type="text" name="obs" value={dataForm.obs} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="photo"> Foto </label>
                    <input type="file" accept='image/*' name="photo" value={dataForm.photo} onChange={handleChange} />
                </div>
            </div>
            <div className='actionsButtons'>
                <Button type="submit" variant="contained" style={{ backgroundColor: '#f9d13b', color: '#454c41', marginTop: "2vw", marginBottom: "1vw" }}>
                    Salvar
                </Button>
            </div>
        </form>
    );
}

export default AddPet;