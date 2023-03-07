// eslint-disable-next-line import/no-extraneous-dependencies
import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../providers/UserContext/UserContext';
import { IRegisterFormValues } from '../../../providers/UserContext/@Types';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),

  email: yup
    .string()
    .required('Email obrigatório')
    .email('O email digitado é invalido '),

  password: yup
    .string()
    .matches(/(\d)/, 'Deve conter ao menos 1 número')
    .matches(/.{8,}/, 'Deve conter no mínimo 8 caracteres'),

  confirmpassword: yup
    .string()
    .required('Campo obrigatório')
    .oneOf(
      [yup.ref('password')],
      'Confirmação de senha devce ser igual a senha'
    ),
});

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: yupResolver(schema),
  });

  const handleRegister: SubmitHandler<IRegisterFormValues> = (data) => {
    userRegister(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(handleRegister)}>
      <Input
        label='Nome'
        type='text'
        helperText={errors.name?.message}
        error={!!errors.name?.message}
        {...register('name')}
      />

      <Input
        label='Email'
        type='email'
        {...register('email')}
        helperText={errors.email?.message}
        error={!!errors.email?.message}
      />

      <Input
        label='Senha'
        type='password'
        helperText={errors.password?.message}
        error={!!errors.password?.message}
        {...register('password')}
      />
      <Input
        label='Confirme sua senha'
        type='password'
        helperText={errors.confirmpassword?.message}
        error={!!errors.confirmpassword?.message}
        {...register('confirmpassword')}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
