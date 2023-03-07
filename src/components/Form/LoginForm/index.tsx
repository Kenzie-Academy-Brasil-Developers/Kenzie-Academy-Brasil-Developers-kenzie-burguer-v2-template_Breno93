import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { ILoginFormValues } from '../../../providers/UserContext/@Types';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>();

  return (
    <StyledForm onSubmit={handleSubmit(userLogin)}>
      <Input
        label='E-mail'
        type='email'
        placeholder='Digite seu e-mail'
        helperText={errors.email?.message}
        error={!!errors.email?.message}
        {...register('email')}
      />
      <Input
        label='Senha'
        type='password'
        placeholder='Digite sua senha'
        helperText={errors.password?.message}
        error={!!errors.password?.message}
        {...register('password')}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
