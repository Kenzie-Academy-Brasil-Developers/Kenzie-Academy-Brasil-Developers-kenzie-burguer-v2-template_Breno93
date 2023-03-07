import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../providers/UserContext/CartContext';

const SearchForm = () => {
  const { searchItem } = useContext(CartContext);

  return (
    <StyledSearchForm>
      <input type='text' onChange={searchItem} placeholder='Digitar pesquisa' />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
