export default function PlayerCard({ setSelectedPlayerId, player, onDelete }) {



    return (
        <div className="players">

            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt={`${player.name}`} />
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <button type="button" onClick={() => {setSelectedPlayerId(player.id); }}>See Details</button>
            <button type="button" onClick={() => onDelete(player.id)}>Delete Player</button>

        </div>
    )
}