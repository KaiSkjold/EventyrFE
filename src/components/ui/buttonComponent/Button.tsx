import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
}

const Button = (buttonProps: ButtonProps) => {
  return (
    <button {...buttonProps} style={{ backgroundColor: buttonProps.color }}>
      {buttonProps.children}
    </button>
  )
}

export default Button