import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./Detail.module.css"
import { Link } from "react-router-dom";

export default function Detail() {
    const [ character, setCharacter ] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailId]);

    return (
        <div className={s.all}>
            <h1 className={s.nombre}>Nombre: {character.name}</h1>
            <div className={s.datos}>
                <img src={character.image} alt={`Imagen de ${character.name}.`} />
                <div className={s.info}>
                    <h3 className={s.infotext}>Estado: {character.status}</h3>
                    <h3 className={s.infotext}>Especie: {character.species}</h3>
                    <h3 className={s.infotext}>Genero: {character.gender}</h3>
                    <h3 className={s.infotext}>Origen: {character.origin?.name}</h3>
                </div>
            </div>
            <Link to="/home"><button className={s.volver}>Volver</button></Link>
        </div>
    );
}
