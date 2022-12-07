// import styled from "styled-components"
import s from "./Card.module.css"
import { Link } from "react-router-dom"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { CiCircleRemove } from 'react-icons/ci'
import { connect } from "react-redux";
import { useState, useEffect } from "react"
import { AddPj, DeletePj } from "../../Redux/actions/actions";

// background-image: linear-gradient(to bottom, #342E2A, #425C76);
// `

function Card(props) {
   const [isFav, setisFav] = useState()

   function handleFavorite() {
      if (isFav) {
         setisFav(false)
         props.DeletePj(props.id)
      } else {
         setisFav(true)
         props.AddPJ(props)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setisFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.myFavorites]);

   return (
      <div className={s.divCarta}>
         <button className={s.botonCerrar} onClick={props.onClose}><CiCircleRemove/></button>
         {isFav ? 
            (<button className={s.botonFav} onClick={handleFavorite}><AiFillHeart/></button>) : 
            (<button className={s.botonFav} onClick={handleFavorite}><AiOutlineHeart/></button>)}
         <Link to={`/detail/${props.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <h2 className={s.namePJ}>{props.name}</h2>
         </Link>
         <div className={s.divTexto}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         <img className={s.imagenPJ} src={props.image} alt={`Imagen de ${props.name}`} />
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return { AddPJ: (personaje) => dispatch(AddPj(personaje)), DeletePj: (id) => dispatch(DeletePj(id)) }
}

function mapStateToProps(state) {
   return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)