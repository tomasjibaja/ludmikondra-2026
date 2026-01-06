'use client';
import React, { ReactNode } from "react";

interface ComponentWithChildrenProps {
  // Option 1: Use ReactNode
  children: ReactNode; 
  // Option 2: Use React.ReactNode
  // children: React.ReactNode; 
  variant?: string;
}

  const variants = {
    'lavanda': 'bg-lavanda text-creamy hover:(text-lavanda bg-creamy)',
    'lima': 'bg-lima text-dark-green',
    'dark': 'bg-leaf-green text-creamy hover:text-leaf-green hover:bg-creamy'
  }

const Button: React.FC<ComponentWithChildrenProps> = ({ children, variant }) => {

  let styles = '';

  if (variant === 'lavanda') {
    styles = 'bg-lavanda text-white hover:text-lavanda hover:bg-white';
  } else if (variant === 'lima') {
    styles = 'bg-lima text-dark-green hover:text-lima hover:bg-dark-green';
  } else if (variant === 'dark') {
    styles = 'bg-leaf-green text-white hover:text-leaf-green hover:bg-white';
  } else {
    styles = 'bg-white text-black hover:text-white hover:bg-black';
  }

  return (
    <button 
      onClick={() => alert('Hiciste click')}
      className={`px-4 py-2 rounded-4xl text-xl font-medium duration-200 hover:cursor-pointer ${styles}`}
    >
      {children}
    </button>
  )
}

export default Button