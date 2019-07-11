import React, {Component} from "react";
import "./account.css"
import Header from "../../components/Header/header"
import Profil from "../../components/profil/Profil"


class Listing extends Component {
   
    render() {
        return (
            <div className="all_main">
                <Header></Header>
                <Profil></Profil>
                
                

                
            </div>
        );
    }
}

export default Listing;