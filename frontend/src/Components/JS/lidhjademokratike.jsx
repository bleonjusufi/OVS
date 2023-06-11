import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Sidebar from '../Sidebar.jsx';
import React from "react";
import '../CSS/ldk.css';


function Ldk(){
    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className="grupi-parlamentar">
                <h1>Levizja Demokratike e Kosoves</h1>
                <h2>Voto per LDK me numrin 3!</h2>
                <div className="deputet1">
                    <h3>Avdullah Hoti</h3>
                    <h5>Voto 1!</h5>
                </div>
                <div className="deputet1">
                    <h3>Kujtim Shala</h3>
                    <h5>Voto 2!</h5>
                </div>
                <div className="deputet1">
                    <h3>Lumir Abdixhiku</h3>
                    <h5>Voto 3!</h5>
                </div>
                <div className="deputet1">
                    <h3>Anton Quni</h3>
                    <h5>Voto 4!</h5>
                </div>
                <div className="deputet1">
                    <h3>Behxhet Pacolii</h3>
                    <h5>Voto 5!</h5>
                </div>
                <div className="deputet1">
                    <h3>Arben Gashi</h3>
                    <h5>Voto 6!</h5>
                </div>
                <div className="deputet1">
                    <h3>Marigona Geci</h3>
                    <h5>Voto 7!</h5>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Ldk;