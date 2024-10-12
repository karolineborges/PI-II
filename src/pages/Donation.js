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
                    <div> 🌟 Ajude a transformar vidas! Sua contribuição pode fazer a diferença na proteção e bem-estar dos animais. 
                        Juntos, podemos proporcionar um lar seguro e amoroso para aqueles que mais precisam. 🐾 Doe agora e faça parte dessa causa! ❤️</div>
                    <div> Para mais informações: <a href="https://linktr.ee/ongaea?fbclid=PAZXh0bgNhZW0CMTEAAaZLIpzgpfpaTIllx4z_0qolDq8uSVbDtzvjpdO8g2MxrU6iAfUswZ2awWA_aem_cTyeDA6R8BKcILgCRFVgEg" target="_blank">Clique aqui</a></div>
                </div>
            </section>
        </>
    );
}

export default Donation;