'use client';
import React, { ReactNode } from "react";

interface ComponentWithChildrenProps {
  // Option 1: Use ReactNode
  children: ReactNode; 
  // Option 2: Use React.ReactNode
  // children: React.ReactNode; 
  variant: string;
}

const Button: React.FC<ComponentWithChildrenProps> = ({ children, variant }) => {

  const variants = {
    'lavanda': 'bg-lavanda text-creamy hover:(text-lavanda bg-creamy)',
    'lima': 'bg-lima text-dark-green',
    'dark': 'bg-leaf-green text-creamy hover:text-leaf-green hover:bg-creamy'
  }

  return (
    // rome-ignore lint/a11y/useButtonType: <explanation>
<button 
      onClick={() => alert('Hiciste click')}
      className={`px-4 py-2 rounded-4xl text-xl font-medium duration-200 hover:cursor-pointer ${variants[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button