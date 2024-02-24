'use client'
import Link from 'next/link'
import React, { useState, } from 'react'

export default function Nav() {
    const [theme, setTheme] = useState('dark');

    function toggleDarkMode() {
        if (document.documentElement.classList.contains("light")) {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
            setTheme('dark');
        } else if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
            setTheme('light');
        } else {
            if(localStorage.getItem("theme") === "dark"){
                document.documentElement.classList.add("dark")
            }
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add("dark")
                setTheme('dark');
            } else {
                document.documentElement.classList.add("light")
                setTheme('light');
            }
        }
    }

    const moonSvg = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"></path></svg>
    const sunSvg = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path></svg>
    const projectSvg = <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path></svg>
    const experimentsSvg = <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"></path></svg>
    const gitHubSvg = <svg xmlns="http://www.w3.org/2000/svg"  className="inline-block" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
    const aboutSvg = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M176,68a12,12,0,1,1-12-12A12,12,0,0,1,176,68Zm-50.88,61.85a8,8,0,0,0-11.27,1l-40,48a8,8,0,0,0,12.3,10.24l40-48A8,8,0,0,0,125.12,129.85ZM240,80a8,8,0,0,1-3.56,6.66L216,100.28V120A104.11,104.11,0,0,1,112,224H8a8,8,0,0,1-6.25-13L96,93.19V76A60,60,0,0,1,213.21,57.86l23.23,15.48A8,8,0,0,1,240,80Zm-22.42,0L201.9,69.54a8,8,0,0,1-3.31-4.64A44,44,0,0,0,112,76V96a8,8,0,0,1-1.75,5L24.64,208H112a88.1,88.1,0,0,0,88-88V96a8,8,0,0,1,3.56-6.66Z"></path></svg>
    const homeSvg = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M219.31,80,176,36.69A15.86,15.86,0,0,0,164.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.31A15.86,15.86,0,0,0,219.31,80ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.69L208,91.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"></path></svg>

    return (
        <header className='bg-light dark:bg-dark dark:text-light text-base md:text-xl px-4 md:px-8 py-4 md:py-12'>
            <div className='max-w-3xl mx-auto flex items-start justify-between gap-2 md:gap-4'>
                <nav className='flex items-center h-full'>
                    <ul className='flex flex-wrap items-start justify-start gap-2 md:gap-x-8 md:gap-y-4'>
                        <li><Link className='px-3 py-2 rounded-lg border-gray-600 border flex items-center' href='/'>💾 Home</Link></li>
                        <li><Link className='px-3 py-2 rounded-lg border-gray-600 border flex items-center' href='/about/'>🐦 About</Link></li>
                        <li><Link className='px-3 py-2 rounded-lg border-gray-600 border flex items-center' href='/projects/'>🧑‍💻 Projects</Link></li>
                        <li><Link className='px-3 py-2 rounded-lg border-gray-600 border flex items-center' href='/experiments/'>🧩 Experiments</Link></li>
                        <li><Link className='px-3 py-2 rounded-lg border-gray-600 border flex items-center' href='/'>🐈‍⬛ GitHub</Link></li>
                    </ul>
                </nav>
                <button onClick={toggleDarkMode} className='bg-gray-700 hover:border-gray-500 border-2 border-transparent rounded-lg p-2 flex items-center scale-75 origin-top md:scale-100'>{theme === 'dark' ? moonSvg : sunSvg }</button>
            </div>
        </header>
    )
}
