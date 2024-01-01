export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonColor = 'secondary' | 'success' | 'error';
export type ButtonSize = 'small' | 'medium' | 'large';
export interface ButtonProps {
  buttonLabel: string;
  color?: ButtonColor;
  disabled: boolean;
  disableElevation: boolean;
  endIcon?: React.ReactNode;
  href?: string;
  size: ButtonSize;
  startIcon?: React.ReactNode;
  variant: ButtonVariant;
  onClick?: () => void;
}
