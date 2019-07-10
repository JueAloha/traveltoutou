import React, {Component} from "react";
import "./listing.css"
import Header from "../../components/Header"
import Annonce from "../../components/Annonce"


class Listing extends Component {
   
    render() {
        return (
            <div className="all_main">
                <Header></Header>
                <h1 className="titre_listing">TOUS LES TRAJETS</h1>
                <Annonce></Annonce>
                <Annonce></Annonce>
                <Annonce></Annonce>

                
            </div>
        );
    }
}

export default Listing;