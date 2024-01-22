import PlayerCard from './PlayerCard';

export default function PlayerList({ players, setSelectedPlayerId, onDeletePlayer }) {
    return (
        <div className="grid">
            {players.map(player => (
                <PlayerCard key={player.id} player={player} setSelectedPlayerId={setSelectedPlayerId} onDelete={onDeletePlayer} />
            ))}
        </div>
    );
}