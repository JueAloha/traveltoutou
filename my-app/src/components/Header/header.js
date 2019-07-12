import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';




class Header extends React.Component {
    render(){
        return (
           <div className="header_main">
               <figure className="logo">
                   <img src={require("../../image/logo.png")} alt="logo" className="logo_img"/>
               </figure>
               <div className="header_links">
                   <ul>
                   <Link className="nav" to={"/listing"}><li>Consulter les annonces</li></Link>
                   <Link className="nav" to={"/ad"}><li>Deposer une annonce</li></Link>
                   <Link className="nav" to={"/register"}><li>S'inscrire</li></Link>
                   <Link className="nav" to={"/login"}><li>Se connecter</li></Link>
                   </ul>
               </div>
           </div>
        )
    }
}
export default Header;