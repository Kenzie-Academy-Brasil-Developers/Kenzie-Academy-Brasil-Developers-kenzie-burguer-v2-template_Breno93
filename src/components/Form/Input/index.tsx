// eslint-disable-next-line import/no-extraneous-dependencies
import { forwardRef } from 'react';
import { TextFieldProps } from '@mui/material';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

type IInputProps = {
  label: string;
  name: string;
} & TextFieldProps;

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, name, ...rest }, ref) => (
    <fieldset>
      <StyledTextField ref={ref} label={label} name={name} {...rest} />
    </fieldset>
  )
);

export default Input;
