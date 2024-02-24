import React from 'react'
// import { ArrowUp } from "phosphor-react";

export default function BackToTop(props) {
    const { scrolled } = props;

    return (
        <a 
        className={`${scrolled ? '-translate-x-20' : ''} scale-75 md:scale-100 fixed top-0 -right-20 ease-out duration-500 transition-transform p-2 md:mt-4 md:mr-4 border-2 rounded-3xl bg-gray-200 border-black hover:bg-cyan-600 dark:bg-white dark:text-black dark:hover:bg-gray-300`}
        href="#top" >
            <span className='sr-only'>Back to top</span>
        </a>
    )
}
