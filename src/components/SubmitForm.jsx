import { useState } from 'react';

export default function SubmitForm({ onAddPlayer }) {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [message, setMessage] = useState("");

    const defaultImageUrl = "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png";

    let handleSubmit = async (e) => {
        e.preventDefault();

        const playerData = {
            name,
            breed,
            imageUrl: imageUrl || defaultImageUrl
        };

        const result = await onAddPlayer(playerData);
        if (result.success) {
            setMessage("Player added succesfully!");
        } else {
            setMessage("Failed to add player!" + result.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    value={breed}
                    placeholder="Breed"
                    onChange={(e) => setBreed(e.target.value)}
                />

                <input
                    type="text"
                    value={imageUrl}
                    placeholder="Image Url"
                    onChange={(e) => setImageUrl(e.target.value)}
                />

                <button type="submit">Create Player</button>
                {message && <p>{message}</p>}

            </form>
        </div>
    );
}