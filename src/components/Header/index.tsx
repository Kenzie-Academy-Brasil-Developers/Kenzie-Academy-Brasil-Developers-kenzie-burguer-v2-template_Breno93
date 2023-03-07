import { MdShoppingCart, MdLogout } from 'react-icons/md';

import { useContext, useState } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { UserContext } from '../../providers/UserContext/UserContext';
import CartModal from '../CartModal';

const Header = () => {
  const { userLogout } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button type='button' onClick={() => handleOpenModal()}>
                <MdShoppingCart size={28} />
              </button>
              <button type='button' onClick={userLogout}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
      {openModal && <CartModal onClose={handleCloseModal} />}
    </StyledHeader>
  );
};

export default Header;
