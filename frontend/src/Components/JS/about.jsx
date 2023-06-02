import React from 'react';
import Header from '../Header.jsx';
import votimilive from '../../images/votimilive.jpg';
import Footer from '../Footer.jsx';

function About() {
    return (
        <>
            <Header />
            <div className="about-us">
                <h1>Rreth E-Voting</h1>
                <div className="container">
                    <section className="mission">
                        <h2>Qellimi dhe Misioni is Sistemit te votimit online</h2>

                        <div className="vota">
                            <p>
                                Sistemi yne i votimit online ofron nje platforme te sigurt, transparente dhe gjitheperfshirese per votuesit.
                                Sistemi yne ofron nje menyre te re dhe te thjeshte per te votuar ne menyre te sigurt dhe konfidenciale.
                                Misioni yne eshte te ruajme integritetin e procesit demokratik duke ofruar nje platforme qe siguron rezultate te sakta dhe transparente te votimit.
                            </p>
                            <img src={votimilive} id="vota" />
                        </div>
                    </section>
                    <div className="team-member">

                        <h3>Teksti i njoftimit, pershkrimet e kandidateve, opsionet, butonat, verifikimi jane te personalizueshme ne cilendo gjuhe ne te cilen votojne votuesit tuaj.</h3>
                        <p>Ne kemi pare mijera organizata qe trajtojne miliona votues, keshtu qe ne i kuptojme deshirat dhe nevojat tuaja. Nese deshironi ta drejtoni vete, keni nevoje per nje trajnim te vogel ose na beni te gjithe voten per ju, ne mund ta bejme ate sipas menyres tuaj.</p>
                    </div>x
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;