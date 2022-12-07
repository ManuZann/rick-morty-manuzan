import Card from "../Card/Card";
import s from "../Cards/Cards.module.css"

export default function Cards(props) {
  const { characters } = props;
  return <div className={s.Cards}>{characters.map(pj => (
    <Card
      key={pj.id}
      name={pj.name}
      species={pj.species}
      gender={pj.gender}
      image={pj.image}
      id={pj.id}
      onClose={() => props.onClose(pj.id)}
    />
  ))}</div>
}
