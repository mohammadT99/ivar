
"use client"
import { SidebarType } from "@/utiles/types";
import { SidebarVar } from "@/utiles/varibels";
import Image from "next/image";
import styles from './style.module.scss'
import { useState } from "react";
const Sidebar = () => {
const [imageId, setImageId] = useState(0)

    return (
    <div className={`flex justify-between gap-10 items-center ${styles.sidebar}`}>
            <div className="flex flex-col gap-2">
            {
                SidebarVar.map((item) =>{
                    return (    
                        <div className={styles.image} onClick={() => setImageId(item.id)} >
                            <Image src={item.image}  alt="" width={350} height={100}/>
                        </div>
                    );
                })
            }
        </div>
     
        {SidebarVar.map((item) => {
            return (
                <>
                {
                    imageId === item.id && (
                       <div className="flex flex-col">
                        <Image className={styles.sidebar_image} src={item.image} width={270} height={200} alt="" />
                        <p>{item.desc}</p>
                        <span>{item.price}</span>
                       </div>
                        
                    )
                }
                </>
            )
        }) }
    </div>
    )
}

export default Sidebar ;