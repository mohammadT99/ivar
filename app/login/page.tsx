import Container from '@/components/ui/Container/page'
import LoginForm from '@/components/ui/LoginForm/page'
import Link from 'next/link'
import React from 'react'


function Login() {
  return (
    <div className='mt-20'>
      <Container>
        <LoginForm/>
        <div className="mt-8">
            <Link href={'/register'} className='hover:text-blue-600'>
                <p className="text-center">
                    برای ثبت نام کلیک کنید
                </p>
             
            </Link>
        </div>
      </Container>
    </div>
  )
}


export default Login

