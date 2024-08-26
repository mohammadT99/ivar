import prismadb from '@/libs/prismadb';
import { Session } from 'next-auth';
import Link from 'next/link';
import React from 'react'
import User from '../user/page';
import { Login } from 'iconsax-react';


type UserAvatarProps = {
    session:Session | null
}
 async function UserAvatar({session}:UserAvatarProps) {
    if(!session || !session.user.usreId) {
        return (
            <div>
                <Link href={'/login'} className=' flex items-center justify-center gap-2 py-2 rounded-md px-3 bg-black text-white hover:bg-slate-400 transition-all' >
                <Login/>
                    واردشوید
                    
                </Link>
            </div>
        )
    }
    const user = await prismadb.user.findUnique(
        {
            where:{
                id:session.user.usreId ,

            }
        }
    )
  return (
    <User name={user?.name as string} />
  )
}

export default UserAvatar ;
