import React from 'react'
import Link from 'next/link'
import hp from '/public/img/hp1.jpg'

export default function Footer() {
    return (
        <footer className='bg-blue-200'>
            <div className='max-w-6xl mx-auto px-4 md:px-8'>
                <section className='flex flex-col md:flex-row items-start gap-8 md:gap-16'>
                    <ul>
                        <li><Link href=''>Home</Link></li>
                        <li><Link href=''>About</Link></li>
                        <li><Link href=''>Contact</Link></li>
                        <li><Link href=''>Portfolio</Link></li>
                    </ul>
                    <ul>
                        <li><Link href=''>Github</Link></li>
                        <li><Link href=''>Codepen</Link></li>
                        <li><Link href=''>LinkedIn</Link></li>
                    </ul>
                </section>
                <section aria-label='copyright info' className=''>
                    <p className=''>&#169; Copyright <span>{(new Date().getFullYear())}</span> Sidney Hopkins</p>
                </section>
            </div>
        </footer>
    )
}
