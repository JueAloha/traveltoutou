import React, {Component} from "react";
import Header from "../../components/Header"
import Ads from "../../components/Ad/ad"
import "./listing.css"


class Listing extends Component {

    render() {
        return (
            <div className="all_main">
                <Header/>
                <h1 className="titre_listing">TOUS LES TRAJETS</h1>
                <Ads/>
                <Ads/>
                <Ads/>
            </div>
        );
    }
}

export default Listing;