import React from 'react';
import './home.styles.scss';
import Button from "../../components/button/button.component";
import ButtonLocalLink from "../../components/button/button-local-link.component";
import LandingImage from '../../assets/lady-silhouette-landing.jpeg';
import BackMassage from '../../assets/massage-b&w.jpg';
import YogaMassage from '../../assets/yoga-massage-bw.jpg';


const Home = () => {
    return (
        <div className='home-page' id='home'>

            <section className='landing-section'>
                <div className='landing-section-title'>
                    <h1>Massage Thérapeutique</h1>
                    <h2>Lavey-Village</h2>
                </div>
                <div className='landing-section-text-and-image'>
                    <div className='landing-section-text'>
                        <div className='landing-p'>
                            <p>
                                <span>Déesses, offrez-vous le cadeau de revenir à votre corps</span>
                                <span>Le cadeau du temps et du soin</span>
                                <span>De la douceur et de la bienveillance</span>
                                <span>Pour régler votre système nerveux, hormonal, digestif</span>
                                <span>Pour lâcher des tensions musculaires et émotionnelles</span>
                                <span>Pour retrouver l'équilibre, la détente, le bien-être</span>
                                <span>Pour revenir à vous-même</span>
                            </p>
                        </div>
                        <div className='landing-ul'>
                            <ul>
                                <li>Déblocage du dos</li>
                                <li>Détente musculaire</li>
                                <li>Points de pression (améliore la circulation)</li>
                                <li>Yoga massage (améliore la souplesse)</li>
                                <li>Massage du ventre (aide la digestion, soulage les troubles émotionnels)</li>
                                <li>Soins énergétiques</li>
                                <li>Yoni massage, womb healing, tantra pour femme</li>
                                <li>Activation de la voix (voice healing)</li>
                            </ul>
                        </div>
                        <div className='landing-button'>
                            <ButtonLocalLink text="Plus d'infos" href={'/massages-et-tarifs'} />
                        </div>
                    </div>
                    <div className='landing-section-image'>
                        <img src={LandingImage} alt="silhouette d'une femme sur une plage"/>
                    </div>
                </div>
            </section>



            <section className='explanation-and-experience'>
                <div className='grid-container grid-img back-massage-img'>
                    <div className='grid-child'>
                        <img src={BackMassage} alt="Back massage"/>
                    </div>
                    <div className='grid-child grid-text burgundy-bg'>
                        <div className='explanation-text-container'>
                            <h3 className='subheading explanation-title'>L'approche</h3>
                            <p><strong>Je travaille beaucoup dans la douceur, afin de calmer le système nerveux et
                                permettre une relaxation optimale. Une fois que le corps est recéptif, on peut faire un
                                travail plus en profondeur sur les muscles, les émotions et tous les systèmes du corps, mais toujours en écoutant ses limites, car la
                                détente ne se force pas.</strong></p>
                            <p><strong>Je mélange souvent diverses techniques, selon les besoins et le cas
                                spécifique.</strong></p>
                            <p>Si ça vous parle, j'aime inclure des éléments de la pleine conscience et du travail avec la respiration dans une séance, ce qui facilite la relaxation.</p>
                        </div>
                    </div>
                    <div className='grid-child grid-text'>
                        <div className='experience-text-container'>
                            <h3 className='subheading experience-title'>Rebecca Thompson <br/>Massothérapeute et enseignente
                                de yoga</h3>
                            <p><strong>Formations</strong></p>
                            <ul>
                                <li><strong>Massage thai</strong> - Julien Levy, 2023</li>
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
                    <div className='grid-child grid-img yoga-massage-img'>
                        <img src={YogaMassage} alt="Yoga massage"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
