
'use client'
import { Carter_One } from "next/font/google";
import SubmitButton from "../Buttons/submit-button";
import { CheckUserEmail } from "@/actions/auth-actions";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const LoginForm = () => {
  
    return (
        <form
      action={async (formdata) => {
        const email = formdata.get('email');
        const password = formdata.get('password');
        const res = await CheckUserEmail(formdata);

        if (res?.success) {
          await signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
            
          } ,);
         
        }
        if(res?.success === false) {
          toast('ایمیل از قبل وجود دارد')
        }
        
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl text-center font-bold'>نام نویسی</h2>
     
      <input
        type='email'
        placeholder='ایمیل'
        className='rounded-md border p-2 shadow-sm'
        name='email'
      />
      <input
        type='password'
        placeholder='رمز عبور'
        className='rounded-md border p-2 shadow-sm'
        name='password'
      />
      
      <SubmitButton />
    </form>
    )
}

export default LoginForm