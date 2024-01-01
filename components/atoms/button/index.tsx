import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from './types';

const ButtonAtom = ({ ...props }: ButtonProps) => {
  return <Button {...props}>{props.buttonLabel}</Button>;
};

export default ButtonAtom;
