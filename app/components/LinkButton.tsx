'use client';
import Link from "next/link";

interface ChildProps {
  text: string; 
  variant?: string;
  link: string
}

const variants = {
  'lavanda': 'bg-lavanda text-creamy hover:(text-lavanda bg-creamy)',
  'lima': 'bg-lima text-dark-green',
  'dark': 'bg-leaf-green text-creamy hover:text-leaf-green hover:bg-creamy'
}

const Button = ({ text, variant, link }: ChildProps) => {

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
      className={`px-5 py-2 rounded-md lg:text-xl font-medium duration-200 hover:cursor-pointer my-5 shadow-md ${styles}`}
    >
      <Link href={link}>
        {text}
      </Link>
    </button>
  )
}

export default Button