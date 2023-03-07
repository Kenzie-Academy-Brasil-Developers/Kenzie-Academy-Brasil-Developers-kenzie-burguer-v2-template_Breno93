/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/UserContext/CartContext';

const ProductCard = () => {
  const { searchItemList, addFood } = useContext(CartContext);

  return (
    <>
      {searchItemList.map((item: any) => {
        const { id, name, category, img, price } = item;

        return (
          <StyledProductCard key={id}>
            <div className='imageBox'>
              <img src={img} alt={name} />
            </div>
            <div className='content'>
              <StyledTitle tag='h3' $fontSize='three'>
                {name}
              </StyledTitle>
              <StyledParagraph className='category'>{category}</StyledParagraph>
              <StyledParagraph className='price'>
                {price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </StyledParagraph>
              <StyledButton
                onClick={() => addFood(item)}
                $buttonSize='medium'
                $buttonStyle='green'
              >
                Adicionar
              </StyledButton>
            </div>
          </StyledProductCard>
        );
      })}
    </>
  );
};

export default ProductCard;
