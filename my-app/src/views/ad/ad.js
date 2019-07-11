<<<<<<< HEAD
import React, {Component, Fragment} from "react";
import "../registration/formpage.css"
import "./ad.css"
import Header from "../../components/Header"
=======
import React, { Component } from "react";
import Header from "../../components/Header";
import "../register/register.css";
import "./ad.css";
>>>>>>> b058e73518407ce35e29cdf14a294079975bc533

class Ad extends Component {
    render() {
        return (
            <div className="all_main">
<<<<<<< HEAD
                <Header></Header>
                <main className="register_main">
                    <figure className="img_register">
                        <img src={require("../../image/cardog.png")}></img>
                        <figcaption className="big_text_ad"><span className="big_text_color">Transportes un </span>Compagnon<br></br><span className="small_text_ad">Ça donne du chien !</span></figcaption>
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
                <br></br>
                
                <label>
                    Description*:
                    <textarea rows="10" cols="46"></textarea>
                    <span></span>
                </label>
                <label>
                    Moyen de transport*:
                    <input type="text" placeholder="Moyen de locomotion" name="password"/>
                    <span></span>
                </label>
                <input id="submit_registration" type={"submit"} value={"Valider"}/>
            </div>
            </form>
            </main>
=======
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
>>>>>>> b058e73518407ce35e29cdf14a294079975bc533
            </div>
        );
    }
}

export default Ad;