import dog1 from "./images/dog1.jpg";
import dog2 from "./images/dog2.jpg";
import dog3 from "./images/dog3.jpg";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import tody from "./images/tody.png";
import arthur from "./images/arthur.png";
import flor from "./images/flor.png";
import trovao from "./images/trovao.png";
import princesa from "./images/princesa.png";
import aurora from "./images/aurora.png";

const database = [
    { name: "Trovão", specie: "CÃO", sex: "MACHO", age: "6 MESES", vaccinated: "SIM", castrated: "SIM", image: trovao, size: "GRANDE", obs: "" },
    { name: "Tody", specie: "CÃO", sex: "MACHO", age: "3 ANOS", vaccinated: "SIM", castrated: "SIM", image: tody, size: "PEQUENO", obs: ""},
    { name: "Arthur", specie: "CÃO", sex: "MACHO", age: "2 ANOS", vaccinated: "SIM", castrated: "SIM", image: arthur, size: "MÉDIO", obs: "" },
    { name: "Flor", specie: "CÃO", sex: "FÊMEA", age: "2 ANOS", vaccinated: "SIM", castrated: "SIM", image: flor, size: "MÉDIO", obs: "" },
    { name: "Princesa", specie: "GATO", sex: "FÊMEA", age: "1 ANO E MEIO", vaccinated: "SIM", castrated: "SIM", image: princesa, size: "MÉDIO", obs: "" },
    { name: "Aurora", specie: "CÃO", sex: "FÊMEA", age: "1 ANO", vaccinated: "SIM", castrated: "SIM", image: aurora, size: "MÉDIO", obs: "" },
];
const sugestion = [
    { size: "PEQUENO", specie: "CÃO", name: "Paçoca", sex: "MACHO", age: "12 meses", castrated: "SIM", image: dog1, vaccinated: "SIM", obs: "" },
    { size: "PEQUENO", specie: "CÃO", name: "Bolinha", sex: "MACHO", age: "6 meses", castrated: "NÃO", image: dog2, vaccinated: "NÃO", obs: "" },
    { size: "MÉDIO", specie: "GATO", name: "Baster", age: "3 anos", sex: "FÊMEA", castrated: "SIM", image: cat1, vaccinated: "SIM", obs: "Possui rinite." },
    { size: "PEQUENO", specie: "CÃO", name: "Amora", age: "3 meses", sex: "FÊMEA", castrated: "SIM", image: dog3, vaccinated: "SIM", obs: "" },
    { size: "GRANDE", specie: "GATO", name: "Dori", age: "9 anos", sex: "FÊMEA", castrated: "NÃO", image: cat2, vaccinated: "SIM", obs: "" },
    { name: "Tela", specie: "CÃO", sex: "FÊMEA", age: "12 meses", vaccinated: "SIM", castrated: "SIM", image: dog1, size: "MÉDIO", obs: "Devido uma infecção que teve nos olhos, Bob realizou uma cirugia nos olhos" },
];

function addPet(pet){
    let data = JSON.parse(sessionStorage.getItem("data"));

    data.push(pet);
    database.push(pet);

    sessionStorage.setItem("data", JSON.stringify(data));
}

function addSugestionPet(pet) {
    let data = JSON.parse(sessionStorage.getItem("sugestion"));

    data.push(pet);

    sessionStorage.setItem("sugestion", JSON.stringify(data));
    return data;
}

function editPet(pet, id) {
    let data = JSON.parse(sessionStorage.getItem("data"));

    data[id].name = pet.petName.toUpperCase();
    data[id].age = pet.age.toUpperCase();
    data[id].sex = pet.sex.toUpperCase();
    data[id].obs = pet.obs;
    data[id].vaccinated = pet.vaccinated.toUpperCase();
    data[id].castrated = pet.castrated.toUpperCase();
    data[id].image = pet.image;
    data[id].size = pet.size;

    database[id].name = pet.petName.toUpperCase();
    database[id].age = pet.age.toUpperCase();
    database[id].sex = pet.sex.toUpperCase();
    database[id].obs = pet.obs;
    database[id].vaccinated = pet.vaccinated.toUpperCase();
    database[id].castrated = pet.castrated.toUpperCase();
    database[id].image = pet.image;
    database[id].size = pet.size;

    sessionStorage.setItem("data", JSON.stringify(data));
}

function deletePet(id) {
    let data = JSON.parse(sessionStorage.getItem("data"));

    data.splice(id, 1);
    console.log("data deletePet")
    console.log(data)
    database.splice(id, 1);

    sessionStorage.setItem("data", JSON.stringify(data));
}

function removeSugestion(id){
    let data = JSON.parse(sessionStorage.getItem("sugestion"));

    data.splice(id, 1);


    sessionStorage.setItem("sugestion", JSON.stringify(data));
}

function addSugestion(id) {
    let sugestions = JSON.parse(sessionStorage.getItem("sugestion"));

    let pet = sugestions[id];
    let data = JSON.parse(sessionStorage.getItem("data"));

    data.push(pet);

    sessionStorage.setItem("data", JSON.stringify(data));

    removeSugestion(id);
}

function searchPets(filters){
    let pets = JSON.parse(sessionStorage.getItem("data"));
    console.log(filters)

    if (filters.specie === '' && filters.name === '' && filters.type === '' && filters.size === ''){
        return (pets);
    }

    if (filters.specie !== '')
        pets = pets.filter(obj => obj.specie === filters.specie);
    
    if (filters.name !== '')
        pets = pets.filter(obj => obj.name.toUpperCase() === filters.name.toUpperCase());
    
    if (filters.type !== '')
        pets = pets.filter(obj => obj.sex === filters.type);
    
    if (filters.size !== '')
        pets = pets.filter(obj => obj.size === filters.size);

    console.log("pets")
    return pets;
}

export { database, sugestion, addPet, editPet, deletePet, addSugestion, removeSugestion, addSugestionPet, searchPets };