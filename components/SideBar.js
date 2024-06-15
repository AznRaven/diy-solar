import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const SideBar = () => {
    const navList = [
        {
            href: '/',
            name: 'Home',

        },
        {
            href: '/solar-string-voltage',
            name: 'Solar String Voltage',

        },
        {
            href: '/faq',
            name: 'FAQ'
        }
    ]
  return (
    <nav className='px-4 py-2'>
        <div className='flex justify-center'>

        <ModeToggle/>
        </div>
        <ul className='flex flex-col gap-y-3 text-lg'>
            {navList.map((x,i)=>(
                <Link href={x.href}>
                <li>{x.name}</li>
                </Link>
            ))}
        </ul>
    </nav>
  )
}

export default SideBar