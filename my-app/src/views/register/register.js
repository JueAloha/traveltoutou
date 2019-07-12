import React, { Component } from "react";
import { registration } from '../../Services/UserServices'
import Header from "../../components/Header/header"
import "./register.css"

class Register extends Component {
    state = {
        lastName: "",
        firstName: "",
        username: "",
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
            const { lastName, firstName, username, password } = this.state;
            registration(lastName, firstName, username, password)
            .then(result => {
                console.log(result)
            })
        }
    }

    render() {
        return (
            <div className="all_main">
                <Header/>
                <main className="register_main">
                    <figure className="img_register">
                        <img src={require("../../image/dog.png")} alt="chien"/>
                        <figcaption className="big_text_registration"><span className="big_text_color">Rejoins</span>-Nous<br/><span className="small_text_registration">Ça donne du chien !</span></figcaption>
                    </figure>
                    <form onSubmit={(e) => this.handleSubmit(e)} className="form_register">
                        <div className="inputs_register">
                            <label>
                                Nom :
                                <input className={this.state.validation} type="text" placeholder="Votre nom" value={this.state.lastName} onChange={(e)=>this.handleInputChange(e)} name="lastName" required={true}/>
                                <span> {this.state.validation === "firstNameNotValid" ? "Veuillez entrer votre nom" : "" || this.state.validation === "allNotValid" ? "Veuillez entrer votre nom" : ""} </span>
                            </label>
                            <label>
                                Prénom :
                                <input className={this.state.validation} type="text" placeholder="Votre prénom" value={this.state.firstName} onChange={(e)=>this.handleInputChange(e)} name="firstName" required={true}/>
                                <span> {this.state.validation === "lastNameNotValid" ? "Veuillez entrer votre prénom" : "" || this.state.validation === "allNotValid" ? "Veuillez entrer votre prenom" : ""} </span>
                            </label>
                            <label>
                                Mail :
                                <input className={this.state.validation} type="email" placeholder="Votre mail" value={this.state.username} onChange={(e)=>this.handleInputChange(e)} name="username" required={true}/>
                            </label>
                            <label>
                                Mot de passe :
                                <input className={this.state.validation} type="password" placeholder="Votre mot de passe" value={this.state.password} onChange={(e)=>this.handleInputChange(e)} name="password" required={true}/>
                                <span> {this.state.validation === "passwordNotValid" ? "Veuillez entrer votre mot de passe" : "" || this.state.validation === "allNotValid" ? "Veuillez entrer votre mot de passe" : ""} </span>
                            </label>
                            <input id="submit_registration" type={"submit"} value={"Valider"}/>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}

export default Register;