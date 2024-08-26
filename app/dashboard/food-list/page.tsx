import CardFood from '@/components/ui/CardFood/page'
import Container from '@/components/ui/Container/page'
import Link from 'next/link'

import React from 'react'

function FoodList() {
  return (
    <Container className='mt-20 flex flex-col gap-5'>
        <div className='flex justify-between items-center bg-gray-900 px-2 py-4 rounded-md'>
            <p >لیست محصولات</p>
            <Link href={'/dashboard/add'} className='bg-orange-600 px-4 py-2 rounded-md' >افزودن محصول</Link>
        </div>
    <CardFood name='اسپرسو' image='' id=''/>
    <CardFood name='اسپرسو' image='' id=''/>
    <CardFood name='اسپرسو' image='' id=''/>
    </Container>
  )
}

export default FoodList
