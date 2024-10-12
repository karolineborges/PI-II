import "../styles/Donation.css"
import dog from "../images/dog_donation.jpg"

function Donation(){

    return(
        <>
            <section className="donation">
                <div className="image-cat">
                    <img src={dog} key="petCat"></img>
                </div>
                <div className="infos">
                    <div style={{ backgroundColor: "#fff" }}>Estatísticas de abandono de animais</div>
                    <div style={{ backgroundColor: "#fff" }}>infomações sobre quantidade de animais no abrigo</div>
                    <div style={{ backgroundColor: "#fff" }}>infomações sobre gastos</div>
                    <div style={{ backgroundColor: "#fff" }}>infomações pix para doação</div>
                </div>
            </section>
        </>
    );
}

export default Donation;