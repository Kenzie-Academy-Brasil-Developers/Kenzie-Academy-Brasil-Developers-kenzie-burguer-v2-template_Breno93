import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/UserContext/CartContext';

const CartProductList = () => {
  const { productsCart, removeAllFood } = useContext(CartContext);
  const totalDoCarrinho = productsCart.reduce(
    (totalValue, productCart) => totalValue + Number(productCart.price),
    0
  );

  return (
    <StyledCartProductList>
      <ul>
        <CartProductCard />
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          {totalDoCarrinho.toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={removeAllFood}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
