import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Sidebar from '../Sidebar';
import React from "react";
import '../CSS/zgjedhjet.css';

function Zgjedhjet(){
    return(
    <div>
        <Header/>
        <Sidebar/>
        <div className="zgjedhjet-container">
            <h1>Zgjedhjet Qendrore</h1>
            <div className="Zgjedhjet Qendrore">
                <div className="Vetvendosje">
                 <p>Vetvendosje</p>
                </div>
                <div className="Partika Demokratike e Kosoves">
                 <p>Partika Demokratike e Kosoves</p>
                </div>
                <div className="Levizja Demokratike e Kosoves">
                 <p>Levizja Demokratike e Kosoves</p>
                </div>
            </div>
            <div className="Zgjendjet Lokale">
                <h1>Zgjendjet Lokale</h1>
                <div className="Komuna-Prishtine">
                 <p>Prishtina</p>
                </div>
                <div className="Komuna-Prizren">
                 <p>Prizren</p>
                </div>
                <div className="Komuna-Mitrovica">
                 <p>Mitrovica</p>
                </div>
                <div className="Komuna-Ferizaj">
                 <p>Ferizaj</p>
                </div>
                <div className="Komuna-Podujeva">
                 <p>Podujeva</p>
                </div>
                <div className="Komuna-Gjakova">
                 <p>Gjakova</p>
                </div>
                <div className="Komuna-Peja">
                 <p>Peja</p>
                </div>
                <div className="Komuna-Gjilani">
                 <p>Gjilani</p>
                </div>
                <div className="Komuna-Skenderaj">
                 <p>Skenderaj</p>
                </div>
                <div className="Komuna-Deçani">
                 <p>Deçani</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>  
    ) 
}

export default Zgjedhjet;