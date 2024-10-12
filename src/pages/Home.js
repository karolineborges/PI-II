import { Link } from "react-router-dom";
import '../styles/Home.css';
import '../styles/Login.css';
import dog from "../images/dof_home.jpg";
import cat from "../images/cat_home.png";
import { database, sugestion } from "../db.js"

function Home(){
    sessionStorage.setItem("data", JSON.stringify(database));
    sessionStorage.setItem("sugestion", JSON.stringify(sugestion));

    return (
        <>
        <div className="pets-home">
            <h1>Adote um bichinho</h1>
            <span>Nos ajude a encontrar um novo lar para eles, adote!</span>
            <button>
                <Link to="/adoption" aria-label="Ver pets disponíveis">Ver pets disponíveis</Link>
            </button> 
        </div> 
        <h3>Pets em destaque</h3>       
        <div className="cards-home" role="region" aria-labelledby="pets-highlight">
            <div className="card-home" aria-label="Imagem de um cachorro">
                <img src={dog} key="petCat" alt="Cachorro" />
            </div>
            <div className="card-home" aria-label="Imagem com três cachorros caramelo">
                <img src={cat} alt="Cachorros"/>
            </div>
        </div>
        </>
    );
}

export default Home;