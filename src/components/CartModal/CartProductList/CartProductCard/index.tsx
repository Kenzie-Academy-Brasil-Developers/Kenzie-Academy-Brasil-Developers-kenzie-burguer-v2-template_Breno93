import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/UserContext/CartContext';

const CartProductCard = () => {
  const { removeFood, productsCart } = useContext(CartContext);

  return (
    <>
      {productsCart.map((item: any) => {
        const { id, name, img } = item;

        return (
          <StyledCartProductCard key={id}>
            <div className='imageBox'>
              <img src={img} alt={name} />
            </div>
            <div className='contentBox'>
              <StyledTitle tag='h3' $fontSize='three'>
                {name}
              </StyledTitle>
              <button type='button' aria-label='Remover'>
                <MdDelete size={24} id={id} onClick={() => removeFood(item)} />
              </button>
            </div>
          </StyledCartProductCard>
        );
      })}
    </>
  );
};

export default CartProductCard;
