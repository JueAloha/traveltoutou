import React, {Component} from "react";
import { registration } from '../components/UserActions'

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

    handleSubmit(event) {
        event.preventDefault();
        if ((this.state.lastName.length < 2 || this.state.lastName.length > 20) && (this.state.firstName.length < 2 || this.state.firstName.length > 20) && (this.state.password.length > 50 || this.state.password.length < 8)) {
            this.setState({
                validation: "allNotValid",
            });
        } else if (this.state.lastName.length < 2 || this.state.lastName.length > 20) {
            this.setState({
                validation: "lastNameNotValid",
            });
        } else if (this.state.firstName.length < 2 || this.state.firstName.length > 20) {
            this.setState({
                validation: "firstNameNotValid",
            });
        } else if (this.state.password.length > 50 || this.state.password.length < 8) {
            this.setState({
                validation: "passwordNotValid",
            });
        } else {
            const { lastName, firstName, mail, password } = this.state;
            registration(lastName, firstName, mail, password);
        }
    }


    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Nom :
                    <input className={this.state.validation} type="text" placeholder="Votre nom" value={this.state.lastName} onChange={(e)=>this.handleInputChange(e)} name="lastName" required={true}/>
                    <span> {this.state.validation === "lastNameNotValid" ? "Veuillez entrer votre nom" : "" || this.state.validation === "allNotValid" ? "Veuillez entrer votre nom" : ""} </span>
                </label>
                <label>
                    Prénom :
                    <input className={this.state.validation} type="text" placeholder="Votre prénom" value={this.state.firstName} onChange={(e)=>this.handleInputChange(e)} name="firstName" required={true}/>
                    <span> {this.state.validation === "firstNameNotValid" ? "Veuillez entrer votre prénom" : "" || this.state.validation === "allNotValid" ? "Veuillez entrer votre prenom" : ""} </span>
                </label>
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

export default Login;
