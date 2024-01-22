export const fetchPlayers = async () => {
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players');
        const data = await response.json();
        return data.data.players;
    } catch (error) {
        console.error(error);
    }
};

export const addPlayer = async (newPlayer) => {
    try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlayer),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || 'Failed to add the player');
        }

        return await fetchPlayers();
    } catch (error) {
        console.error('Error adding player:', error);
        throw error;
    }
};

export const deletePlayer = async (playerId) => {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf/players/${playerId}`, { method: 'DELETE' });

        if (!response.ok) {
            throw new Error('Failed to delete the player');
        }

        return await fetchPlayers();
    } catch (error) {
        console.error('Error deleting player:', error);
        throw error;
    }
}