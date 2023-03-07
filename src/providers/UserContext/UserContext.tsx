import { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import {
  IDefaultProviderProps,
  ILoginFormValues,
  IRegisterFormValues,
  IUser,
  IUSerContext,
} from './@Types';
import { api } from '../../services/api';

export const UserContext = createContext({} as IUSerContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post('/users', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      toast.success('Cadastro realizado com sucesso!');
      navigate('/');
    } catch (error) {
      toast.error('Ops! Algo deu errado.');
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);

      const response = await api.post('/login', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem('@UserId', response.data.user.id);
      toast.success('Login realizado com sucesso!');
      navigate('/shop');
    } catch (error) {
      toast.error('Ops! Algo deu errado.');
    } finally {
      setLoading(false);
    }
  };

  type AutoLoginFunc = () => void;

  const userAutoLogin: AutoLoginFunc = async () => {
    const token: string | null = localStorage.getItem('@TOKEN');
    const id: string | null = localStorage.getItem('@UserId');
    if (token) {
      try {
        const response = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        navigate('/shop');
      } catch (error) {
        console.log(error);
        localStorage.removeItem('@TOKEN');
        navigate('/');
      }
    }
  };

  useEffect(() => {
    userAutoLogin();
  }, []);

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
