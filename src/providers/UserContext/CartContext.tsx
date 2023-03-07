import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ICardContext, IDefaultProviderProps, IProducts } from './@Types';
import { api } from '../../services/api';

export const CartContext = createContext({} as ICardContext);

export const CartContextProvider = ({ children }: IDefaultProviderProps) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [productsCart, setProductsCart] = useState<IProducts[]>([]);
  const [searchProducts, setSearchProducts] = useState('');
  const token = localStorage.getItem('@TOKEN');

  const navigate = useNavigate();

  const searchItem = (event: React.ChangeEvent | any) => {
    setSearchProducts(event.target.value);
  };

  const searchItemList = products.filter(
    (product) =>
      product.category
        .toLowerCase()
        .includes(searchProducts.toLowerCase().trim()) ||
      product.name.toLowerCase().includes(searchProducts.toLowerCase().trim())
  );

  const addFood = (product: IProducts) => {
    const findAddFood = productsCart.find(
      (productCart) => productCart.id === product.id
    );
    const validate = products.some((event) => event.id === findAddFood?.id);

    if (!validate) {
      setProductsCart([...productsCart, product]);
      toast.success('Item adicionado com sucesso');
    } else {
      toast.error('Item já adicionado');
    }
  };

  const removeFood = (product: IProducts) => {
    const filterRemoveFood = productsCart.filter(
      (productCart) => productCart.id !== product.id
    );
    setProductsCart(filterRemoveFood);
  };

  const removeAllFood = () => {
    setProductsCart([]);
  };

  useEffect(() => {
    const getProduct: () => void = async () => {
      try {
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        window.localStorage.clear();
        navigate('/');
      }
    };
    getProduct();
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        productsCart,
        setProductsCart,
        searchProducts,
        setSearchProducts,
        searchItem,
        searchItemList,
        addFood,
        removeFood,
        removeAllFood,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
