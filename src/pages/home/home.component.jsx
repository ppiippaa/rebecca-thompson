import React from 'react';
import './home.styles.scss';
import Button from "../../components/button/button.component";
import ChaletImage from '../../assets/chalet-mountain-backdrop.jpg';
import BackMassage from '../../assets/massage-b&w.jpg';


const Home = () => {
    return (
        <div className='home-page'>


            {/*LANDING*/}
            <section className='landing-section'>
                <div className='landing-section-title'>
                    <h1>Massage Therapeutique</h1>
                    <h2>Epinassey</h2>
                </div>

                <div className='landing-section-text-and-image'>
                    <div className='landing-section-text'>

                        <div className='landing-p'>
                            <p>
                                <span>Soins dans la nature ou en salle</span>
                                <span>À la Ferme du Closillon</span>
                                <span>Route d'Epinassey 44</span>
                                <span>1890 Epinassey (St-Maurice)</span>
                            </p>
                        </div>

                        <div className='landing-ul'>
                            <ul>
                                <li>Déblocage du dos</li>
                                <li>Détente musculaire</li>
                                <li>Points de pression (encourage la circulation)</li>
                                <li>Yoga massage (améliore la souplesse)</li>
                                <li>Massage du ventre (aide la digestion)</li>
                            </ul>
                        </div>

                        <div className='landing-button'>
                            <Button text="Plus d'infos"/>
                        </div>

                    </div>
                    <div className='landing-section-image'>
                        <img src={ChaletImage} alt="Epinassy"/>
                    </div>

                </div>
            </section>


            {/*RESERVATION BUTTON*/}
            <section className='online-reservations'>
                <Button text='Réservations en ligne'/>
            </section>


            {/*EXPLANATION*/}
            <section className='explanation-and-experience'>

                <div className='grid-container grid-img'>
                    <div className='grid-child'>
                        <img src={BackMassage} alt="back massage"/>
                    </div>

                    <div className='grid-child grid-text burgundy-bg'>
                        <div className='explanation-text-container'>
                            <h3 className='subheading explanation-title'>L'approche</h3>
                            <p><strong>Je travaille beaucoup dans la douceur, afin de calmer le système nerveux et
                                permettre une relaxation optimale. Une fois le corps est recéptif, on peux faire un
                                travail plus profond sur les muscles, mais toujours en écoutant ses limites, car la
                                détente ne se force pas.</strong></p>
                            <p><strong>Je mélange souvent divers techniques, selon les besoins et le cas
                                spécifique.</strong></p>
                            <p>Si ça vous parle, j'aime inclure des éléments de la pleine conscience et du travail avec
                                la respiration dans une séance, ce qui pourrait faciliter la relaxation.</p>
                            <p>Selon l'envie et le météo, les séances peuvent s'effectuer dehors dans la nature, ou dans
                                un charmant et chaleureux atelier transformé en salle de soins.</p>
                        </div>
                    </div>

                    <div className='grid-child grid-text'>
                        <div className='experience-text-container'>
                            <h3 className='subheading experience-title'>Rebecca Thompson <br/>Massothérapeute et enseignente
                                de yoga</h3>
                            <p><strong>Formations</strong></p>
                            <ul>
                                <li><strong>Hypose</strong> - Sea School of embodiment, 2020</li>
                                <li><strong>Connexion corporelle</strong> - Sea School of Embodiment, 2018-2019</li>
                                <li><strong>Health Coach</strong> - Institute for Integrative Nutrition 2017-2018</li>
                                <li><strong>Enseignente de yoga</strong> - Durga's Tiger School, 2016-2017</li>
                                <li><strong>Yoga thérapie</strong> - Yoga inbound, 2016</li>
                                <li><strong>Reiki niveau 2</strong> - 2016</li>
                                <li><strong>Shiatsu massage</strong> - 2016</li>
                                <li><strong>Massage thérapeutique</strong> - 2015</li>
                            </ul>
                        </div>

                    </div>

                    <div className='grid-child grid-img'>
                        <img src={BackMassage} alt=""/>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Home;