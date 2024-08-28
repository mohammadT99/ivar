import { FoodContentType } from "@/utiles/types"
import HotDrink from "../HotDrink/page"

const FoodContent = ({id}:FoodContentType) =>{
    return (
     <>
     {id===1 ?(
        <>
        <HotDrink/>
        </>
     ):null}
     </>
    )
}

export default FoodContent