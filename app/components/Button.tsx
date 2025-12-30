'use client';

export default function Button ({children, variant}) {

  const variants = {
    lavanda: 'bg-lavanda text-creamy hover:(text-lavanda bg-creamy)',
    lima: 'bg-lima text-dark-green',
    dark: 'bg-leaf-green text-creamy hover:text-leaf-green hover:bg-creamy'
  }

  return (
    <button 
      onClick={() => alert('Hiciste click')}
      className={`px-4 py-2 rounded-4xl text-xl font-medium duration-200 hover:cursor-pointer ${variants[variant]}`}
    >
      {children}
    </button>
  )
}