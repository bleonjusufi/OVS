import React from 'react';
import '../CSS/article.css';
import Header from '../Header.jsx';
import aknews from '../../images/aknews.jpg';
import prnews from '../../images/prnews.jpg';
import rhnews from '../../images/rhnews.jpg';
import uinews from '../../images/uinews.jpg';
import avnews from '../../images/avnews.jpg';
import flnews from '../../images/flnews.jpg';
import imnews from '../../images/imnews.jpg';
import vonews from '../../images/vonews.jfif';
import Footer from '../Footer.jsx';


function Article() {
    return (
        <>
            <Header />
            <div className="container">
                <div className='article-container'>
                    <div className='article1'>
                        <img src={aknews} className='albinkurti' ></img>
                        <h3>Albin Kurti nuk lejohet te kandidoje per zgjedhjet ne Kosove</h3>
                        <h5>Albin Kurti, kryeminister, Vetvendosje</h5>
                        <p>Certifikimi i 47 deputeteve per zgjedhjet e parakohshme parlamentare ne Kosove, tashme eshte ne pikepyetje...<a href='#' className='seemore'>see more</a></p>
                    </div>

                    <div className='article2'>
                        <img src={prnews} className='albinkurti' ></img>
                        <h3>Perparim Rama:'Sot ndoshta jam njeriu me i urryer ne Prishtine'</h3>
                        <h5>Perparim Rama, kryetar i Prishtines, LDK</h5>
                        <p>Kryetari i Prishtines, Perparim Rama ka folur per kritikat e shumta ne drejtim te tij...<a href='#' className='seemore'>see more</a></p>
                    </div>

                    <div className='article3'>
                        <img src={rhnews} className='albinkurti' ></img>
                        <h3>Haradinaj: Marreveshja me Serbine duhet te jete per njohje te ndersjelle</h3>
                        <h5>Ramush Haradinaj, kryeminister, AAK</h5>
                        <p>Ne 23 vjetorin e themelimit te AAK-se, Haradinaj nenvizoi edhe nevojen e anetaresimit te Kosoves ne NATO...<a href='#' className='seemore'>see more</a></p>
                    </div>

                    <div className='article4'>
                        <img src={uinews} className='albinkurti' ></img>
                        <h3>Uran Ismaili kandidat i PDK-se per kryetar te komunes se Prishtines</h3>
                        <h5>Uran Ismaili, kandidat per kryetar te Prishtines, PDK</h5>
                        <p>Ismaili i ka bere ndere partise me vendosmerine e tij per te garuar per te parin e Prishtines. Mendojme qe ai do te jete kandidati jone per kete post...<a href='#' className='seemore'>see more</a></p>
                    </div>

                    <div className='article5'>
                        <img src={avnews} className='albinkurti' ></img>
                        <h3>Arben Vitia kandidat per kryetar te Prishtines</h3>
                        <h5>Arben Vitia, kandidat per kryetar te Prishtines, Vetvendosje</h5>
                        <p>Arben Vitia sic duket do te jete kandidat i Vetevendosjes per kryetar te komunes se Prishtines...<a href='#' className='seemore'>see more</a></p>
                    </div>

                    <div className='article6'>
                        <img src={flnews} className='albinkurti' ></img>
                        <h3>Voton Fatmir Limaj: Kosova shembull i demokracise ne rajon</h3>
                        <h5>Fatmir Limaj, kryetar i partise,Nisma</h5>
                        <p>Ai votoi ne shkollen fillore, Faik Konica ne Prishtine derisa u beri thirrje qytetareve qe te dalin e te votojne....<a href='#' className='seemore'>see more</a></p>
                    </div>

                    <div className='article7'>
                        <img src={imnews} className='albinkurti' ></img>
                        <h3>Isa Mustafa per te treten here kandidat per kryeqtytet</h3>
                        <h5>Isa Mustafa, kryetar i partise, LDK</h5>
                        <p>Edhe kete here Lidhja Demokratike e Kosoves ka vendosur qe gares per kryetar te Prishtines ti hyje me Isa Mustafen...<a href='#' className='seemore'>see more</a></p>
                    </div>

                    <div className='article8'>
                        <img src={vonews} className='albinkurti' ></img>
                        <h3>Osmani: Kosova duhet te kete draftin e saj te statutit te Asociacionit</h3>
                        <h5>Vjosa Osmani, Presidente</h5>
                        <p>Presidentja e Kosoves, Vjosa Osmani, ka thene te marten se nje draft i statutit te Asociacionit te komunave me shumice serbe duhet te prezantohet nga ana e Kosoves...<a href='#' className='seemore'>see more</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Article;