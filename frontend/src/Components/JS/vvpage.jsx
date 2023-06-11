import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Sidebar from '../Sidebar';
import React from "react";
import '../CSS/vv.css';

function Vetvendosje(){
    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className="grupi-parlamentar">
                <h1>Vetvendosje</h1>
                <h2>Voto per VV me numrin 1!</h2>
                <div className="deputet1">
                    <h3>Valon Ramadani</h3>
                    <h5>Voto 1!</h5>
                </div>
                <div className="deputet1">
                    <h3>Mimoza Kusari</h3>
                    <h5>Voto 2!</h5>
                </div>
                <div className="deputet1">
                    <h3>Glauk Konjufca</h3>
                    <h5>Voto 3!</h5>
                </div>
                <div className="deputet1">
                    <h3>Albin Kurti</h3>
                    <h5>Voto 4!</h5>
                </div>
                <div className="deputet1">
                    <h3>Haki Abazi</h3>
                    <h5>Voto 5!</h5>
                </div>
                <div className="deputet1">
                    <h3>Arben Vitia</h3>
                    <h5>Voto 6!</h5>
                </div>
                <div className="deputet1">
                    <h3>Fjolla Ujkani</h3>
                    <h5>Voto 7!</h5>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Vetvendosje;