import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='font-dns bg-white flex justify-between w-screen px-[70px] pt-[21px]'>
        <div className="logo">
            <div className='text-[#4880FF] text-[20px] font-extrabold'>AutoCIS</div>
            <div className='text-[#202224] text-[20px] font-extrabold'>Guard</div>
        </div>
        <div className="controls flex  font-semibold text-sm gap-x-16">
            <div className='flex gap-x-4 content-center'>
            <span><Image src={"/dashboard.png"} width={22} height={22}/></span>
            <span>Dashboard</span>
            </div>
            
            <div className='flex gap-x-4 content-center'>
                <span><Image src={"/lock.png"} width={22} height={22}/></span>
            <span>Protocol</span>
            </div>
            
            <div className='flex gap-x-4 content-center'>
                <span><Image src={"/settings.png"} width={22} height={22}/></span>
            <span>Settings</span>
            </div>
            
            <div className='flex gap-x-4 content-center'>
                <span><Image src={"/turn-off.png"} width={22} height={22}/></span>
            <span>Logout</span>
            </div>
            <div>
                <Image src={"/notification.png"} width={26} height={26}/>
            </div>
        </div>
            <div className="profile flex justify-between -ml-12  gap-x-7">
                <div className="pic">
                    <Image src={'/boy.png'} width={32} height={24} alt='pfp' />
                </div>
                <div className="name text-[#404040]">
                    <div className='font-bold text-sm'>Prince</div>
                    <div className='text-xs font-semibold'>Admin</div>
                </div>
                <div className="dropdown">
                    <div className='rounded-full px-3 py-1 text-white bg-slate-800'>P</div>
                </div>
            </div>
    </div>
  )
}

export default Navbar