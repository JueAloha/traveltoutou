import React from 'react';
import header from'./header.css';

class Header extends React.Component {
    render(){
        return (
           <div className="header_main">
               <figure className="logo">
                   <img src={require("../image/logo.png")} alt="logo" className="logo_img"></img>
               </figure>
               <div className="header_links">
                   <ul>
                       <li><a href="" className="nav"> Consulter les annonces</a></li>
                       <li><a href="" className="nav" >Deposer une annonce</a></li>
                       <li><a href="" className="nav" >S'inscrire</a></li>
                       <li><a href="" className="nav" >Se connecter</a></li>
                   </ul>
               </div>
              
           </div>
        )
    }
}
export default Header;