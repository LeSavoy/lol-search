import axios from "axios";
import { useState } from "react";

function App() {
  const [serachText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "RGAPI-3f7cadaa-dc22-4acf-af37-3a1c48b18533";

  function searchForPlayer() {
    let APICallString = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${serachText} ?api_key= ${API_KEY}`;

    axios
      .get(APICallString)
      .then(function (response) {
        setPlayerData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log(playerData);

  return (
    <main className="bg-bg-image h-screen w-screen overflow-hidden text-white bg-no-repeat font-poppins">
      <div className="text-center">
        <h2 className="my-10 font-bold text-xl">
          League of Legends -{" "}
          <span className="text-[#EB0029]">Player Searcher</span>
        </h2>
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          className="outline-none mr-1 text-black h-10 w-34 pl-2 rounded-lg "
        ></input>
        <button
          onClick={(e) => searchForPlayer(e)}
          className="bg-[#EB0029] border-2 border-[#EB0029] h-10 w-34 rounded-lg font-bold"
        >
          <span className="text-sm p-2 font-normal">Search for Player</span>
        </button>
      </div>
      {JSON.stringify(playerData) != "{}" ? (
        <div className="w-screen flex flex-col items-center mt-14 text-white">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/${playerData.profileIconId}.png`}
            width={150}
            alt=""
            className="mr-72 rounded-lg"
          />
          <p className="absolute text-3xl font-bold ml-20 text-[#EB0029]">
            {playerData.name}
          </p>
          <p className="absolute mt-10 ml-20 text-lg">
            Summoner Level {playerData.summonerLevel}
          </p>
        </div>
      ) : (
        <p className="hidden">No player data</p>
      )}
    </main>
  );
}

export default App;
