import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <div>
            <h1>Nombre: {character.name}</h1>
            <h4>Estado: {character.status}</h4>
            <h4>Especie: {character.species}</h4>
            <h4>Genero: {character.gender}</h4>
            <h4>Origen: {character.origin?.name}</h4>
            <img src={character.image} alt={`Imagen de ${character.name}.`} />
        </div>
    );
}
