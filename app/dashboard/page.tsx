import Container from '@/components/ui/Container/page'
import LinkBox from '@/components/ui/LinkBox/page'
import React from 'react'

export default function Dashboard() {
  return (
    <Container className='mt-20'>
     <div className="flex gap-2 items-center justify-center flex-wrap w-full">
     <LinkBox name=' لیست منو  ' link='food-list'/>
     <LinkBox name='گالری  ' link='food'/>
     <LinkBox name=' میز ها ' link='food'/>
     <LinkBox name=' کاربران  ' link='food'/>
     <LinkBox name=' سفارش گیری' link='food'/>
     <LinkBox name=' فاکتور ها  ' link='food'/>
     </div>
    </Container>
  )
}
