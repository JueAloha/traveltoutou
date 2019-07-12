import React, {Component} from "react";
import "./profil.css";
import Ads from "../../components/Ad/ad";

class Profil extends React.Component {

    constructor(){
        super()
        this.state = {
            informations : false,
            past : false,
            future : false
        };
    }

    switchInformations() {
        this.setState({
            informations: true,
            past: false,
            future: false 
        });
    }

    switchPast() {
        this.setState({
            past: true,
            informations: false,
            future: false
        });
    }
    
    switchFuture() {
        this.setState({
            future: true,
            informations: false,
            past: false
        });
    }

    render(){  
        const informations = this.state.informations;
        const past = this.state.past;
        const future = this.state.future;
        
            return (
                
                <div className="profil_main">
                    <section className="navigation_profil">
                        <div className="top_nav_profil">
                         <img src={require("../../image/user.png")} alt="profil" className="img_page_profil"></img>
                         <p>Julie</p>
                        </div>
                        <a className="link_nav_profil" onClick={() => this.switchInformations()}>Mes informations</a>
                        <a className="link_nav_profil" onClick={() => this.switchPast()}>Mes trajets passés</a>
                        <a className="link_nav_profil" onClick={() => this.switchFuture()}>Mes trajets à venir</a>
                    </section>
                    <section className="zone_profil">
                      
                      {informations ? 
                      
                      <div className="informations_profil">
                        <img src={require("../../image/logo.png")} className="img_info_user"></img>
                        <h1 className="title_info">Vos informations</h1><br></br>
                        <p>Nom : LeVinet</p>
                        <p>Prenom : Julie</p>
                        <p>Adresse Mail : zouliDeCuba@gmail.com</p>
                      </div>
                      
                      : ''}




                      {past ? 
                        <div>
                            <Ads/>
                            <Ads/>
                        </div>
                      : ''}
                      {future ? 
                        <div>
                            <Ads/>
                            <Ads/>
                        </div>: ''}
                      
                    </section>                   
                </div>)
            

                

        
        
        

           
            
        


        
    }
}
export default Profil;

