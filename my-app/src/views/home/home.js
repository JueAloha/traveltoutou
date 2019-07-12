import React, { Component } from "react";
import Header from "../../components/Header/header";
import "./home.css";
import dogwalk from '../../image/dogwalk.png';

class Home extends Component {

    constructor(){
        super()
        this.state = {
            isLogged : false
        };
    }

 
    render() {
        return (
            <div className="all_main">
                <Header/>
                <main className="home_main">
                    <section className="gauche_home">
                        <img src={dogwalk} className="img_home"/>
                        <p className="big_text_registration"><span className="big_text_color">travel</span>Toutou<br/><span className="small_text_connexion"> Moins de blabla plus de Miaou!</span></p>
                    </section>
                    <section className="droite_home">
                        <article className="article_home">
                            <img src={require("../../image/dog.png")} alt="logo" className="logo_home"/>
                            <h2 className="titre_description_home">Un voyage qui a <span>du chien</span> !</h2>
                            <p>arcu, non imperdiet purus porttitor vel. Suspendisse sodales lacus et lacus elementum, eget volutpat mauris convallis. Sed cursus leo nec ultrices efficitur. Nullam et consequat lorem. Vestibulum posuere dui vel augue efficitur, sed molestie dui luctus. Integer pellentesque porttitor iaculis. Quisque lobortis dolor id tortor aliquet, vitae varius orci porta. Proin ut sollicitudin ex.

 rdum. Pellentesque et massa non arcu aliquam egestas at eu nibh. Nam ac pellentesque urna, quis malesuada tellus. Mauris sed lacinia orci. Quisque vel dolor arcu. Nam scelerisque dapibus magna, vel egestas lacus accumsan non. Curabitur sit amet odio sit amet justo aliquet aliquam at vitae velit. Sed et nisl a sem tincidunt congue vitae at tortor.</p>
                            <button className="btn_home">S'inscrire</button>
                        </article>
                    </section>

                    
                </main>
            </div>
        );
    }
}

export default Home;