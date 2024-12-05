'use client';

import { useState } from 'react';
import { VariantProps } from 'class-variance-authority';
import { ShadcnButton, buttonVariants } from './ui';

type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];

const Button = () => {
  const [variant, setVariant] = useState<ButtonVariant>('outline');

  const handleClick = () => {
    setVariant('default');
  };

  return (
    <ShadcnButton
      variant={variant}
      onClick={handleClick}
      disabled={variant === 'default' ? true : false}
    >
      Kliknij buttona
    </ShadcnButton>
  );
};

export default Button;
