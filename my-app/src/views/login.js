import React, {Component} from "react";
import { subcription } from '../components/LoginLogic'

class Login extends Component {
    state = {
        lastName: "",
        firstName: "",
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

    infosVerification(event) {
        event.preventDefault();
        if (this.state.lastName.length < 2 || this.state.firstName.length < 2) {
            this.setState(
                {
                    validation: "notValid"
                }
            );
            return null
        } else {
            this.setState(
                {
                    validation: "isValid"
                }
            );
            subcription(this.state)
        }
    }

    render() {
        let errLastName;
        let errFirstName;
        let errMail;
        let errPassword;
        if (this.state.validation === "notValid") {
            errLastName = <span>"Veuillez entrer votre nom"</span>;
            errFirstName = <span>"Veuillez entrer votre prénom"</span>;
            errMail = <span>"Veuillez entrer votre mail"</span>;
            errPassword = <span>"Veuillez entrer votre mot de passe"</span>;
        } else {
            errLastName = null;
            errFirstName = null;
            errMail = null;
            errPassword = null;
        }

        return (
            <form>
                <label>
                    Nom :
                    <input className={this.state.validation} type="text" placeholder="Votre nom" value={this.state.lastName} onChange={(e)=>this.handleInputChange(e)} name="lastName" />
                    {errLastName}
                </label>
                <label>
                    Prénom :
                    <input className={this.state.validation} type="text" placeholder="Votre prénom" value={this.state.firstName} onChange={(e)=>this.handleInputChange(e)} name="firstName" />
                    {errFirstName}
                </label>
                <label>
                    Mail :
                    <input className={this.state.validation} type="mail" placeholder="Votre mail" value={this.state.mail} onChange={(e)=>this.handleInputChange(e)} name="mail" />
                    {errMail}
                </label>
                <label>
                    Mot de passe :
                    <input className={this.state.validation} type="password" placeholder="Votre mot de passe" value={this.state.password} onChange={(e)=>this.handleInputChange(e)} name="password" />
                    {errPassword}
                </label>
                <input onClick={(e)=> this.infosVerification(e)} type="submit" value="Envoyer" />
            </form>
        );
    }
}

export default Login;
