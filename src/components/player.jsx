//prop destructuring in practice
export function Player({ img, pname, team, nation, jersey, age }) {
  //default props
  Player.defaultProps = {
    team: "Chelsea",
  };
  return (
    //player component
    <>
      <div className="team">
        <img src={img} />
        <p style={{ fontWeight: "bold", marginTop: "5px" }}>{pname}</p>
        <p>{team}</p>
        <p>{nation}</p>
        <p> {jersey}</p>
        <p> {age}</p>
      </div>
    </>
  );
}
