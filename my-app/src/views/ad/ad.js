import React, { Component } from "react";
import Header from "../../components/Header/header";
import "../register/register.css";
import "./ad.css";

class Ad extends Component {
    render() {
        return (
            <div className="all_main">
                <Header/>
                <main className="register_main">
                    <figure className="img_register">
                        <img src={require("../../image/cardog.png")}/>
                        <figcaption className="big_text_ad"><span className="big_text_color">Transportes un </span>Compagnon<br/><span className="small_text_ad">Ça donne du chien !</span></figcaption>
                    </figure>
                    <form className="form_register">
                        <div className="inputs_ad">
                            <label>
                                Ville de départ :
                                <input type="text" placeholder="Votre nom" name="lastName"/>
                                <span>  </span>
                            </label>
                            <label>
                                Ville d'arrivée :
                                <input type="text" placeholder="Votre prénom" name="firstName"/>
                                <span> </span>
                            </label>
                            <label>
                                Date :
                                <input type="date" placeholder="Date" name="password"/>
                                <span> </span>
                            </label>
                            <label>
                                Heure de départ :
                                <input type="text" placeholder="Votre mail" name="mail"/>
                            </label>
                            <label>
                                Heure d'arrivée :
                                <input type="text" placeholder="Votre mot de passe" name="password"/>
                                <span> </span>
                            </label>
                            <label>
                                Nombre de places libres:
                                <input type="number" placeholder="Votre mot de passe" name="password"/>
                                <span> </span>
                            </label>
                            <label>
                                Type d'animaux:
                                <select>
                                    <option>Chiens</option>
                                    <option>Chats</option>
                                    <option>NAC</option>
                                    <option>Rongeurs</option>
                                    <option>Cheval</option>
                                    <option>Betail</option>
                                    <option>Autre</option>
                                </select>
                                <span> </span>
                            </label>
                            <label >
                                Prix*:
                                <input type="number" placeholder="Votre mot de passe" name="password"/> *en Euros
                                <span> </span>
                            </label>
                            <br/>

                            <label>
                                Description*:
                                <textarea rows="10" cols="46"/>
                                <span/>
                            </label>
                            <label>
                                Moyen de transport*:
                                <input type="text" placeholder="Moyen de locomotion" name="password"/>
                                <span/>
                            </label>
                            <input id="submit_registration" type={"submit"} value={"Valider"}/>
                        </div>
                    </form>
                </main>

            </div>
        );
    }
}

export default Ad;