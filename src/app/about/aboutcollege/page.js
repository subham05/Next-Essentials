
"use client"

import React from 'react'
import { useRouter } from "next/navigation";


const AboutCollege = () => {
    const router= useRouter();
    const navigate= (name)=>{
      router.push(name)
    }
  return (
    <div>
      <h1>AboutCollege</h1>
      <button onClick={()=> navigate("/")}>Home</button>
    </div>
  )
}

export default AboutCollege