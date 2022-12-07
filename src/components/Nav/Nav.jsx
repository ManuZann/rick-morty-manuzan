import React from "react";
import SBar from "./SearchBar.jsx"
import s from "./Nav.module.css"
import { Link } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai"


export default function Nav(props){
    return(
        <nav className={s.navR}>
            <Link to="/home">
                <img className={s.rickandmorty} src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png" alt="Rick & Morty logo"/>
            </Link>
            <Link to="/about">
                <button className={s.botonS}><AiOutlineQuestionCircle className={s.icono}/><span>About</span></button>
            </Link>
            <Link to="/favs">
                <button className={s.botonS}>Favs</button>
            </Link>
            <SBar onSearch={props.onSearch}/>
        </nav>
    )
}