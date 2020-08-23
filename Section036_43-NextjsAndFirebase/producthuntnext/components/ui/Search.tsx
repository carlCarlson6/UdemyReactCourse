import React from 'react';
import { InputText, SearchForm, SearchButton } from '../styles/ui/SearchStyles';
import { toSearchProduct } from '../../common/utils/toSearchProduct';
 
const Search: React.FC = () => {

    const [search, setSearch] = React.useState<string>('');

    return (
        <SearchForm
            onSubmit={(event) => toSearchProduct(event, search)}
        >

            <InputText 
                type="text"
                placeholder="Buscar productos"
                onChange={(event) => setSearch(event.target.value)}
            />
            
            <SearchButton
                type="submit"
            >Buscar</SearchButton>
        
        </SearchForm>
    );
}
 
export default Search;