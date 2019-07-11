import React, {Component} from "react";
import "./login.css"
import "../register/register.css"
import Header from "../../components/Header/header"


class Connexion extends Component {
   
    render() {
        return (
            <div className="all_main">
                <Header></Header>
                <main className="register_main">
                    <figure className="img_register">
                        <img src={require("../../image/cat.jpg")}></img>
                        <figcaption className="big_text_registration"><span className="big_text_color">travel</span>Toutou<br></br><span className="small_text_connexion"> Moins de blabla plus de Miaou!</span></figcaption>
                    </figure>
            <form className="form_register">
            <div className="inputs_register">
                <label>
                    Adresse mail :
                    <input type="text" placeholder="Mail" name="lastName"/>
                    <span>  </span>
                </label>
                <label>
                    Mot de passe :
                    <input type="password" placeholder="Mot de passe" name="firstName"/>
                    <span> </span>
                </label>
                
                <input id="submit_registration" type={"submit"} value={"Valider"}/>
            </div>
            </form>
            </main>
            </div>
        );
    }
}

export default Connexion;