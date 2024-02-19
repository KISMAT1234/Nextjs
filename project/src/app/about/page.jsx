"use client"
import React from 'react'
import {useRouter} from 'next/navigation'
const aboutpage = () => {
  const router=useRouter();
  return (
    <>
    <div>aboutpage</div>
    <button onClick={()=>router.push("/about/aboutstudent")}>Student page</button>
    </>

  )
}

export default aboutpage