import React, {Component} from "react";
import "./ad.css"

class Ad extends Component {
    render(){
        return (
            <div className="annonce_main">
                <section className="info_trajet_annonce">
                    <div className="heure_trajet_annonce">
                        <p className="date_trajet">Jeudi 23 Janvier 2019</p>
                        <div className="heure_trajet">
                            <p>19h30</p>
                            <br/>
                            <br/>
                            <br/>
                            <p>21h45</p>
                        </div>
                        <div className="villes_trajet">
                            <p>Marseille</p>
                            <br/>
                            <br/>
                            <br/>
                            <p>Montpellier</p>
                        </div>
                    </div>

                </section>

                <section className="prix_trajet"><p className="prix"> 10 €</p></section>
                <div className="user_trajet_annonce">
                    <img src={require("../../image/user.png")} className="img_annonce" id="user_img_annonce"/>
                    <p id="username_annonce">Sarah</p>
                    <img src={require("../../image/dogicon.png")} className="img_annonce"/>
                    <img src={require("../../image/cat.png")} className="img_annonce"/>
                    <p>x3</p>
                </div>


            </div>
        )
    }
}
export default Ad;

