"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  return (
    <div className="main w-screen h-screen flex box-border font-dns bg-[#0B1437] ">
        <div className="input mx-auto h-screen content-center">
            <div className='text-white m-auto w-[410px] h-[452px]'>
                <h1 className="font-bold leading-[56px] text-[#FFFFFF] text-[36px]">Sign In</h1>
                <p className='leading-4 text-[#A3AED0]'>Enter your email and password to sign in!</p>
            
            <div className="form mt-[72px]">
              <form method='POST' className='flex flex-col justify-between h-[316px]'>
                <div className='flex flex-col gap-3'>
                <label className='text-sm font-medium'>Email*</label>
                <input 
                value={email}
                 onChange={(e)=>{setemail(e.target.value)}}
                 className='bg-transparent border-slate-500 border-[1.5px] rounded-lg py-[5px] pl-[24px] text-sm text-[#A3AED0]' type="text" placeholder='mail@gmail.com'/>
                <label className='text-sm font-medium'>Password*</label>
                <input 
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                className='bg-transparent border-slate-500 border-[1.5px] rounded-lg py-[5px] pl-[24px] text-sm text-[#A3AED0]' type='text' placeholder='Min. 8 characters'/>
                </div>
              
              <div className="flex justify-between text-sm">
                <div className='flex gap-x-2 justify-between'>
                <input type="checkbox" />
                <p>Keep me logged in</p>
                </div>
                <Link href={"/"}>Forgot password?</Link>
              </div>
              <button className='bg-[#7551FF] rounded-[1rem] text-sm font-bold py-3'>Sign In</button>
              </form>
            </div>
            </div>
        </div>

        <div className="image w-1/2 overflow-hidden h-screen rounded-bl-[4.2rem]">
            <Image src={"/image.png"} className='object-cover w-full h-full' width={1000} height={1000} />
        </div>
    </div>
  )
}

export default page