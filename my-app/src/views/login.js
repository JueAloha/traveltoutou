import React, {Component} from "react";
import { connexion } from '../components/UserActions'

class Connexion extends Component {
    state = {
        mail: "",
        password: "",
        validation: "isValid",
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.password.length > 50 || this.state.password.length < 8) {
            this.setState({
                validation: "passwordNotValid",
            });
        } else {
            const {mail, password } = this.state;
            connexion(mail, password);
        }
    }


    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Mail :
                    <input className={this.state.validation} type="email" placeholder="Votre mail" value={this.state.mail} onChange={(e)=>this.handleInputChange(e)} name="mail" required={true}/>
                </label>
                <label>
                    Mot de passe :
                    <input className={this.state.validation} type="password" placeholder="Votre mot de passe" value={this.state.password} onChange={(e)=>this.handleInputChange(e)} name="password" required={true}/>
                    <span> {this.state.validation === "passwordNotValid" ? "Veuillez entrer votre mot de passe" : "" || this.state.validation === "allNotValid" ? "Veuillez entrer votre mot de passe" : ""} </span>
                </label>
                <input type={"submit"} value={"Valider"}/>
            </form>
        );
    }
}

export default Connexion;
