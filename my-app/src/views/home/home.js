import React, { Component } from "react";
import Header from "../../components/Header/header";
import { Link } from 'react-router-dom';
import dogwalk from '../../image/dogwalk.png';
import "./home.css";

class Home extends Component {
    render() {
        return (
            <div className="all_main">
                <Header/>
                <main className="home_main">
                    <section className="gauche_home">
                        <img src={dogwalk} className="img_home" alt={"A dog walking with his hooman"}/>
                        <p className="big_text_registration"><span className="big_text_color">travel</span>Toutou<br/><span className="small_text_connexion"> Moins de blabla plus de Miaou!</span></p>
                    </section>
                    <section className="droite_home">
                        <article className="article_home">
                            <img src={require("../../image/dog.png")} alt="logo" className="logo_home"/>
                            <h2 className="titre_description_home">Un voyage qui a <span>du chien</span> !</h2>
                            <p>Tout propriétaire d’un animal à déjà connu la difficulté lorsque vient le temps des vacances ou bien que l’on doit s’absenter quelques temps de faire garder son animal de compagnie.
Que la garde se fasse avec des proches qui habitent loin et nécessite de se déplacer, que la personne qui devait garder notre chouchou nous fasse faux-bond ou bien qu’on ne soit pas à l’aise à l’idée de faire venir un inconnu chez nous pour 30 minutes de présence et une facture élevée en définitive, nombreuses sont les raisons qui peuvent générer des angoisses et nous gâcher un potentiel moment de plaisir. 
TravelToutou s’installe dans cette nouvelle dynamique et propose une plateforme qui met en relation des voyageurs (voiture, train avion, vélo, moto, deltaplane et j’en passe) de se voire confier le temps du trajet de prendre soin et d’accompagner un animal jusqu’à la destination convenue avec le propriétaire. 
TravelToutou permet de visualiser les annonces des voyageurs, de mettre en relation les propriétaires et les voyageurs, d’obtenir un premier contact et de convenir d’un point de rendez-vous. 
Ainsi le propriétaire est rassuré, le voyageur a toutes les informations et l’animal peut voyager sereinement sans générer de stress.</p>
                            <Link to={"/register"}><button className="btn_home">S'inscrire</button></Link>
                        </article>
                    </section>
                </main>
            </div>
        );
    }
}

export default Home;