import { useState } from "preact/hooks";
import { Player } from "./components/player.jsx";
import { Nav } from "./components/nav.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";

//Messi
const Player1 = {
  img: "./Messi.png",
  pname: "Lionel Andrés Messi",
  team: "Inter Miami CF",
  nation: "Argentina",
  jersey: "10",
  age: "36",
};

//Mbappé
const Player2 = {
  img: "./Mbappe.png",
  pname: "Kylian Mbappé Lottin",
  team: "Paris Saint-Germain F.C",
  nation: "French",
  jersey: "7",
  age: "24",
};

//Kevin
const Player3 = {
  img: "./Kevin.png",
  pname: "Kevin De Bruyne",
  team: "Manchester City",
  nation: "Belgium",
  jersey: "17",
  age: "24",
};

//Kane
const Player4 = {
  img: "./Kane.png",
  pname: "Harry Edward Kane",
  team: "FC Bayern Munich",
  nation: "England",
  jersey: "9",
  age: "30",
};
export function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Player
              img={Player1.img}
              pname={Player1.pname}
              team={Player1.team}
              nation={Player1.nation}
              jersey={Player1.jersey}
              age={Player1.age}
            />
          </div>
          <div className="col-6">
            <Player
              img={Player2.img}
              pname={Player2.pname}
              team={Player2.team}
              nation={Player2.nation}
              jersey={Player2.jersey}
              age={Player2.age}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Player
              img={Player3.img}
              pname={Player3.pname}
              team={Player3.team}
              nation={Player3.nation}
              jersey={Player3.jersey}
              age={Player3.age}
            />
          </div>
          <div className="col-6">
            <Player
              img={Player4.img}
              pname={Player4.pname}
              team={Player4.team}
              nation={Player4.nation}
              jersey={Player4.jersey}
              age={Player4.age}
            />
          </div>
        </div>
      </div>
    </>
  );
}
