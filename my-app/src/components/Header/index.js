import React from 'react';
import './theme.css';

class Index extends React.Component {
    render(){
        return (
           <div className="header_main">
               <figure className="logo">
                   <img src={require("../../image/logo.png")} alt="logo" className="logo_img"></img>
               </figure>
               <div className="header_links">
                <a href="" className="nav"> Consulter les annonces</a>
                <a href="" className="nav" >Deposer une annonce</a>
                <a href="" className="nav" >S'inscrire</a>
                <a href="" className="nav" >Se connecter</a>
               </div>
           </div>
        )
    }
}
export default Index;