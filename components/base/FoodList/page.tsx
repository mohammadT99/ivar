"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Container from "@/components/ui/Container/page";
import NavbarFood from "../NavbarFood/page";
import { navbarfood } from "@/utiles/varibels";
import FoodContent from "../FoodContent/page";

function FoodList() {
  const [idFood, setIdFood] = useState(0);

  return (
    <Container className="flex flex-col gap-2 mt-2">
      <div className="flex gap-6 justify-center items-center">
      {
        navbarfood.map((item , key) => {
            return (
                <NavbarFood key={key} name={item.name} onClick={() => setIdFood(item.id)} />
            )
        })
      }
        
      </div>
      
      <FoodContent id={idFood}/>
    </Container>
  );
}

export default FoodList;
