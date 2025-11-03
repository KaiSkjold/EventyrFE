import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  borderStyle?: string;
}

const Button = (buttonProps: ButtonProps) => {
  return (
    <button {...buttonProps} className={`button-style ${buttonProps.borderStyle}`}>
      {buttonProps.children}
    </button>
  )
}

export default Button