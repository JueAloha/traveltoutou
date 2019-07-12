import React, { Component } from "react";
import Header from "../../components/Header/header";
import "./home.css";

class Home extends Component {
    render() {
        return (
            <div className="all_main">
                <Header/>
                <main className="home_main">
                    <section className="gauche_home">
                        <img scr={require("../../image/dogwalk.png")}></img>
                    </section>
                    <section></section>

                    
                </main>
            </div>
        );
    }
}

export default Home;