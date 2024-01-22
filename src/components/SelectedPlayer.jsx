import { useState, useEffect } from 'react';
export default function SelectedPlayer({ selectedPlayerId, onBack }) {
    const [player, setPlayer] = useState(null)

    useEffect(() => {
        async function fetchPlayer() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players/${selectedPlayerId}`);
                const data = await response.json();
                console.log(data);
                setPlayer(data.data.player);
            } catch (error) {
                console.error(error);
            }
        }
        if (selectedPlayerId) {
            fetchPlayer();
        }
    }, [selectedPlayerId]);

    if (!player) {
        return <div>Loading player...</div>
    }

    return (
        <div className='player'>
            <h2>Player Detail</h2>
            <p>Name: {player.name}</p>
            <p>Email: {player.breed}</p>
            <p>Phone: {player.status}</p>
            <button onClick={onBack}>Back</button>
        </div>
    );
}