import { navbarfoodType, SidebarType } from "./types";

// navbarfood
export const navbarfood: navbarfoodType[] = [
    {
        name: 'بارگرم',
        id: 1
    },
    {
        name: 'بار سرد ',
        id: 2
    },
    {
        name: 'دسر',
        id: 3
    },
    {
        name: 'صبحانه',
        id: 4
    },
]

import image from '@/public/pexels-tyler-nix-1259808-2396220-removebg-preview.png'
import image2 from '@/public/image-4@2x.jpg'

export const SidebarVar: SidebarType = [
    {
        id:1 ,
        image: image,
        name: 'image',
        desc:'لورم اپیسوم' ,
        price:12000

    },

    {
        id:2 ,
        image: image2,
        name: 'image' ,
        desc:'لورم اپیسوم' ,
        price:2500


    },
    {
        id:3 ,
        image: image,
        name: 'image' ,
        desc:'لورم اپیسوم' ,
        price:12

    },
    {
        id:4 ,
        image: image,
        name: 'image' ,
        desc:'لورم اپیسوم' ,
        price:2000

    },

]