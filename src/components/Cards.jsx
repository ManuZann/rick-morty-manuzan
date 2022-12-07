import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  return characters.map(pj => (
    <Card
      key={pj.id}
      name={pj.name}
      species={pj.species}
      gender={pj.gender}
      image={pj.image}
      id={pj.id}
      onClose={() => props.onClose(pj.id)}
    />
  ));
}
