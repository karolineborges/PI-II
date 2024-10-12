import { Button } from '@mui/material';
import React, { useState } from 'react';
import { scheduleVisit } from "../services/ScheduleService";

function FormVisit(){
    const [send, setSend] = useState(false);
    const [dataForm, setDataForm] = useState({
        petName: '',
        visitorName: '',
        email: '',
        phone: '',
        date: '',
        petId: 1
    });
    let database = JSON.parse(sessionStorage.getItem("data"));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();         

        scheduleVisit(dataForm);
        setSend(true);
    };

    return (
        <>{
        send === true ? <p>Agendamento realizado com sucesso!</p> :
        <form onSubmit={handleSubmit} className='formVisit'>
            <div>
                <div>
                    <label htmlFor="petName"> Nome do Pet </label>
                    <select onChange={handleChange} required name="petName">
                        {
                            database.map((item, index)=>(
                                <option value={item.name} >
                                        {item.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="visitorName"> Seu nome </label>
                    <input type="text" name="visitorName" value={dataForm.visitorName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phone"> Telefone para contato </label>
                    <input type="number" maxLength="11" minLength="11" name="phone" value={dataForm.phone} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" value={dataForm.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="date"> Data e hora </label>
                    <input type="datetime-local" name="date" value={dataForm.firstName} onChange={handleChange} required />
                </div>
            </div>
            <Button type="submit" variant="contained" style={{ backgroundColor: '#f9d13b', color: '#454c41', marginTop: "2vw", marginBottom: "1vw" }}>
                Agendar
            </Button>
        </form>
        }</>
    );
}

export default FormVisit;