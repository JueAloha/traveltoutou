import React from 'react';
import { Link } from 'react-router-dom'
import './theme.css';

class Index extends React.Component {
    render(){
        return (
           <div className="header_main">
               <figure className="logo">
                   <Link><img src={require("../../image/logo.png")} alt="logo" className="logo_img"/></Link>
               </figure>
               <div className="header_links">
                   <Link to={"/ad"}><a href="" className="nav"> Deposer les annonces</a></Link>
                <a href="" className="nav" >Consulter une annonce</a>
                   <Link to={"/login"}><a href="" className="nav" >Se connecter</a></Link>
               </div>
           </div>
        )
    }
}
export default Index;