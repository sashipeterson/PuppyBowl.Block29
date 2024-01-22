import { useState, useEffect } from "react";
import './App.css'
import PlayerList from "./components/PlayerList";
import SelectedPlayer from "./components/SelectedPlayer";
import SubmitForm from "./components/SubmitForm";
import { fetchPlayers, addPlayer, deletePlayer } from "./api/puppyBowlApi"
import { SearchBar } from "./components/SearchBar";


function App() {

  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (value) => {
      setSearchTerm(value);
    }

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const playersData = await fetchPlayers();
        setPlayers(playersData);
      } catch (error) {
        console.error("Failed to fetch players:", error);
      }
    };

    loadPlayers();
  }, []);

  const handleAddPlayer = async (newPlayer) => {
    try {
      const updatedPlayers = await addPlayer(newPlayer);
      setPlayers(updatedPlayers);
    } catch (error) {
      console.error("Failed to add player", error);
    }
  };

  const handleDeletePlayer = async (playerId) => {
    try {
      const updatedPlayers = await deletePlayer(playerId);
      setPlayers(updatedPlayers);
    } catch (error) {
      console.error("Failed to delete player", error);
    }
  };

  function resetSelectedPlayer() {
    setSelectedPlayerId(null);
  }

  return (
    <>
      {selectedPlayerId ? (
        <div>
          <SelectedPlayer selectedPlayerId={selectedPlayerId} onBack={resetSelectedPlayer} />
        </div>

      ) : (

        <div>
          <SubmitForm onAddPlayer={handleAddPlayer} />
          <SearchBar onSearchChange={handleSearchChange} />
          <PlayerList players={filteredPlayers} setSelectedPlayerId={setSelectedPlayerId} onDeletePlayer={handleDeletePlayer} />
        </div>

      )}
    </>
  );
}

export default App