import { useParams } from "react-router-dom";

const PropDrilling = ({ students, pokemons }) => {
  console.log(students, "students");

  return (
    <div>
      <h1 className="heading">Prop Drilling Page</h1>
      {students.map(
        (
          student // () directly returns the code
        ) => (
          <span>🌟{student} </span>
        )
      )}

<h2>Pokedex</h2>


      <div
        className="pokedex"
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          display: "flex",
          flexWrap : "wrap",
          marginBottom : "2em"
        }}
      >
        {pokemons.map((pokemon) => (
          <div
            className="pokemon-card"
            style={{
              position: "relative",
              minWidth: "22%",
              height: "auto",
              margin: "auto",
              borderRadius: "10px",
              margin : "10px auto",
              boxShadow : "0px 0px 10px #aaa"
            }}
          >
            <img src={pokemon.image} />
            <p>{pokemon.id}</p>
            <h4>{pokemon.name}</h4>
            <p>{pokemon.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PropDrilling;
