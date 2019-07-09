import React from 'react';
import header from'./header.css';

class Header extends React.Component {
    render(){
        return (
           <div className="header_main">
               <figure className="logo">
                   <img src="../../../public/image/dogwalk.png"></img>
               </figure>
               <a className="nav"> Les cartes</a>
               <a className="nav" >Plans</a>
               <a className="nav" >Tenues</a>
               <a className="nav" >Videos</a>
              
           </div>
        )
    }
}
export default Header;