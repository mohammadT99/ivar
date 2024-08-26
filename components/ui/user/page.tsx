'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

type UserPrpos = {
    name : string
}

function User({name}:UserPrpos) {
  return (
    <div className='flex items-center justify-between gap-x-2'>
      <div className="flex size-10 items-center justify-center rounded-full border shadow">
        <span className='text-2xl font-bold'>{name[0]}</span>
      </div>
      <button className='rounded-md py-2 bg-black text-white px-3  ' onClick={(e) => {
        e.preventDefault();
        signOut({
            callbackUrl:'/'
        })
      }}>خروج</button>
    </div>
  )
}


export default User ;

