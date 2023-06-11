import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Sidebar from '../Sidebar';
import React from "react";
import '../CSS/voto.css';

function Voto(){
    return(
    <div>
        <Header/>
        <Sidebar/>
        <div className="zgjedhjet">
            <h1>Voto!</h1>
            <div className="zgjedhjetQendrore">
                <h3>Zgjedhjet Qendrore</h3>
            </div>
            <div className="zgjedhjetLokale">
                <h3>Zgjedhjet Lokale</h3>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Voto;