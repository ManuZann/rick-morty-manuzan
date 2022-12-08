import s from "./SearchBar.module.css"
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ocultoS = {
   display: "none"
}
const visibleS = {
   display: "inline"
}

export default function SearchBar(props) {
   const location = useLocation().pathname
   const [UInput, setUInput] = useState("")

   const search = e => {
      const { value } = e.target
      setUInput(value)
   }

   const Random = () => Math.floor(Math.random() * 827)

   return (
      <div style={location === "/home" ? visibleS : ocultoS}>
         <input className={s.inputS} type='search' onChange={search}/>
         <button className={s.botonS} onClick={() => props.onSearch(UInput)}>Agregar</button>
         <button className={s.botonS} onClick={() => props.onSearch(Random())}>Random</button>
      </div>
   );
}
