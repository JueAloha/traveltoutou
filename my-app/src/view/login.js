import React, {Component} from "react";

class Login extends Component {
    state = {
        lastName: "",
        firstName: "",
        mail: "",
        password: "",
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.lastName || !this.state.firstName || !this.state.mail || !this.state.password) {
            window.alert("Merci de remplir tous les champs")
        } else {
            //this.post_data()
            console.log(this.state)
        }
    };

    render() {
        return (
            <form>
                <label>
                    Nom :
                    <input type="text" placeholder="Nom" value={this.state.lastName} onChange={(e)=>this.handleInputChange(e)} name="lastName" />
                </label>
                <label>
                    Prénom :
                    <input type="text" placeholder="Prénom" value={this.state.firstName} onChange={(e)=>this.handleInputChange(e)} name="firstName" />
                </label>
                <label>
                    Mail :
                    <input type="mail" placeholder="Mail" value={this.state.mail} onChange={(e)=>this.handleInputChange(e)} name="mail" />
                </label>
                <label>
                    Mot de passe :
                    <input type="password" placeholder="Mot de passe" value={this.state.password} onChange={(e)=>this.handleInputChange(e)} name="password" />
                </label>
                <input type="submit" onClick={(e)=>this.handleSubmit(e)} value="Envoyer" />
            </form>
        );
    }
}

export default Login;
