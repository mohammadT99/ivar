// rendering
'use client' 

// imports
import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import DefaultImage from '@/public/image-4@2x.jpg'
import { Edit, Trash } from 'iconsax-react'
import Link from 'next/link'

// types
type CardFoodProps = {
    image  : string ,
    name : string ,
    id: string | number ,
}
function CardFood({name='اسپرسو' , image , id}:CardFoodProps) {
  return (
    <div className={styles.card} >
        <div className={styles.card_name}>
            <p>{name}</p>
        </div>
        <div className={styles.card_image}>
            <Image className='size-20 rounded-md' src={!image?DefaultImage:image } alt=''/>
        </div>
        <div className={styles.card_edit}>
            <Link href={`/dashboard/edit/${id}`} >
            <Edit className={styles.card_edit_edit}/>
            </Link>
            <Link href={`/dashboard/edit/${id}`} >
            <Trash className={styles.card_edit_trash}/>
            </Link>
        </div>

    </div>
  )
}

export default CardFood
