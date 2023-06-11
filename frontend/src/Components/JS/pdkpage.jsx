import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Sidebar from '../Sidebar';
import React from "react";
import '../CSS/pdk.css';

function Pdk(){
    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className="grupi-parlamentar">
                <h1>Partia Demokratike e Kosoves</h1>
                <h2>Voto per PDK me numrin 2!</h2>
                <div className="deputet1">
                    <h3>Uran Ismaili</h3>
                    <h5>Voto 1!</h5>
                </div>
                <div className="deputet1">
                    <h3>Memli Krasniqi</h3>
                    <h5>Voto 2!</h5>
                </div>
                <div className="deputet1">
                    <h3>Xhavit Halili</h3>
                    <h5>Voto 3!</h5>
                </div>
                <div className="deputet1">
                    <h3>Ramush Haradinaj</h3>
                    <h5>Voto 4!</h5>
                </div>
                <div className="deputet1">
                    <h3>Ferat Shala</h3>
                    <h5>Voto 5!</h5>
                </div>
                <div className="deputet1">
                    <h3>Eliza Hoxha</h3>
                    <h5>Voto 6!</h5>
                </div>
                <div className="deputet1">
                    <h3>Ganimete Musliu</h3>
                    <h5>Voto 7!</h5>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Pdk;