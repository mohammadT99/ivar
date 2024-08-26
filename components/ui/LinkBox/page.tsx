import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';


type LoginBoxProps = {
    link : string  ,
    name : string 
}
function LinkBox({link , name}:LoginBoxProps) {
  return (
    <Link  href={`/dashboard/${link}`} className={styles.link_box}>
      <p>{name}</p>
    </Link>
  )
}

export default LinkBox ;
