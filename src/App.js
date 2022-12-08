import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom"

import Cards from "./components/Cards/Cards.jsx";
import NavB from "./components/Nav/Nav.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail/Detail.jsx"
import Form from "./components/Form/Form.jsx"
import Favorites from "./components/Favorites/Favorites.jsx"


function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  const username = "manuzan123@hotmail.com"
  const password = "manu1234"

  function login(userData){
    if(userData.username === username || userData.password === password){
      setAccess(true)
      navigate("/home")
    }else{
      alert("Usuario o contraseña incorrecto!")
    }
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (characters.find(char => char.id === data.id)){
          window.alert("Personaje Repetido")
        }else{
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
          else {
            window.alert("No hay personajes con ese ID");
          }
        }
      });
  }

  function onClose(ID) {
    setCharacters(characters.filter(char => char.id !== ID))
  }

  useEffect(() =>{
    //!access && navigate("/")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access])

  return (
    <div style={{ padding: "25px" }}>
      {location.pathname !== "/" && <NavB onSearch={onSearch} />}

      <Routes>
      <Route path="/" element={<Form login={login}/>}/>
      <Route path="home" element={<Cards onClose={onClose} characters={characters}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/favs" element={<Favorites/>}/>
      <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
