// client rendering
"use client"

// imports
import React from "react"
import styles from './style.module.scss'  ;
// type
type NavbarFoodProps = {
    name:string ,
    
    onClick:any
}
const NavbarFood = ({ name, onClick} : NavbarFoodProps) => {

    return (
        <>
            <button type="button" className={styles.navbar_food} onClick={onClick}>{name}</button>
        </>
    ) 
}

export default NavbarFood ;