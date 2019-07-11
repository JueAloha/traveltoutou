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
                       <Link to={"/listing"}><li><a className="nav">Consulter les annonces</a></li></Link>
                       <Link to={"/ad"}><li><a className="nav">Deposer une annonce</a></li></Link>
                       <Link to={"/register"}><li><a className="nav">S'inscrire</a></li></Link>
                       <Link to={"/login"}><li><a className="nav">Se connecter</a></li></Link>
                   </ul>
               </div>
           </div>
        )
    }
}
export default Header;