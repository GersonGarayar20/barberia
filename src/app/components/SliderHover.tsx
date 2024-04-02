'use client'

import { useState } from "react";

function SliderHover() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        console.log("entro")
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
        console.log(" salio")
      };

    const tagLittle = ""

    return (
        <article className="px-4  flex gap-4  " >
            <figure className="bg-blue-500 w-full grow-1   " 
             >

            </figure>
            <figure className="bg-green-500 w-full    ">

            </figure>

        </article>
    );
}

export default SliderHover;