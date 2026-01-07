'use client'
import { useState } from 'react'
import MachuPichuHook from './MachuPichuHook'
import MachuPichuHookAlt from './MachuPichuHookAlt'

const HookToggle = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div onClick={() => setToggle(!toggle)}>
      {toggle ? <MachuPichuHook /> : <MachuPichuHookAlt />}
    </div>
  )
}

export default HookToggle
