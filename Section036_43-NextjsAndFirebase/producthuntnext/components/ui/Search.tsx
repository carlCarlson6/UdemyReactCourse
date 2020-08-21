import React from 'react';
import { InputText, SearchForm, InputSubmit } from '../styles/ui/SearchStyles';
 
const Search: React.FC = () => {
    return (
        <SearchForm>

            <InputText 
                type="text"
                placeholder="Buscar productos"
            />
            
            <InputSubmit
                type="submit"
            >Buscar</InputSubmit>
        
        </SearchForm>
    );
}
 
export default Search;