import React from 'react';
import { InputText, SearchForm, SearchButton } from '../styles/ui/SearchStyles';
 
const Search: React.FC = () => {
    return (
        <SearchForm>

            <InputText 
                type="text"
                placeholder="Buscar productos"
            />
            
            <SearchButton
                type="submit"
            >Buscar</SearchButton>
        
        </SearchForm>
    );
}
 
export default Search;