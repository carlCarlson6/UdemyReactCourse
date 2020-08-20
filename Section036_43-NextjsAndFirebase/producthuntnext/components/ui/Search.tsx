import React from 'react';
 
const Search: React.FC = () => {
    return (
        <form>
            <input type="text"/>
            <button
                type="submit"
            >Buscar</button>
        </form>
    );
}
 
export default Search;