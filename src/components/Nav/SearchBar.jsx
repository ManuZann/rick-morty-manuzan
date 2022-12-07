import s from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const [UInput, setUInput] = useState("")

   const search = e => {
      const { value } = e.target
      setUInput(value)
   }

   const Random = () => Math.floor(Math.random() * 827)

   return (
      <div>
         <input className={s.inputS} type='search' onChange={search}/>
         <button className={s.botonS} onClick={() => props.onSearch(UInput)}>Agregar</button>
         <button className={s.botonS} onClick={() => props.onSearch(Random())}>Random</button>
      </div>
   );
}
