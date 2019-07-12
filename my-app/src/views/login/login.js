import React, {Component} from "react";
import { connection } from '../../Services/UserServices'
import Header from '../../components/Header/header'
import './login.css'


class Login extends Component {
    state = {
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
        if (this.state.password.length > 50 || this.state.password.length < 8) {
            this.setState({
                validation: "passwordNotValid",
            });
        } else {
            const {username, password } = this.state;
            connection(username, password)
                .then(result => {
                return result
            })
        }
    }


    render() {
        return (
            <div className="all_main">
                <Header/>
                <main className="register_main">
                    <figure className="img_register">
                        <img src={require("../../image/cat.jpg")} alt={"A cat"}/>
                        <figcaption className="big_text_registration"><span className="big_text_color">travel</span>Toutou<br/><span className="small_text_connexion"> Moins de blabla plus de Miaou!</span></figcaption>
                    </figure>
                <form className="form_register" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="inputs_register">
                    <label>
                        Mail :
                        <input className={this.state.validation} type="email" placeholder="Votre mail" value={this.state.username} onChange={(e)=>this.handleInputChange(e)} name="username" required={true}/>
                    </label>
                    <label>
                        Mot de passe :
                        <input className={this.state.validation} type="password" placeholder="Votre mot de passe" value={this.state.password} onChange={(e)=>this.handleInputChange(e)} name="password" required={true}/>
                        <span> {this.state.validation === "passwordNotValid" ? "Veuillez entrer votre mot de passe" : "" || this.state.validation === "allNotValid" ? "Veuillez entrer votre mot de passe" : ""} </span>
                    </label>
                    <input type={"submit"} value={"Valider"}/>
                    </div>
                </form>
                </main>
            </div>
        );
    }
}

export default Login;
