export const SearchBar = ({ onSearchChange }) => {

    const handleChange = (event) => {
        onSearchChange(event.target.value);
    }

    return(
        <div>
            <input
            type="text"
            placeholder="Type to Search..."
            onChange={handleChange} />
        </div>
    );
}