import React from 'react'
import ExperimentItem from './ExperimentItem'

export default function Experiments() {
    return (
        <main className='min-h-screen bg-light text-dark dark:bg-dark dark:text-light px-4 sm:px-8 py-16 md:py-24 text-2xl'>
            <section className='mx-auto max-w-5xl'>
                <h2 className='portfolio-section__heading text-6xl font-bold pb-8'>Experiments</h2>
                <p className='pb-16'>These are some of my best attempts to solve odd problems or create something special! Much of these are rough-and-ready proof of concepts. They're my favorite 🩵 🪄💡</p>


                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <ExperimentItem/>
                    <ExperimentItem/>
                    <ExperimentItem/>
                    <ExperimentItem/>
                    <ExperimentItem/>
                    <ExperimentItem/>
                    <ExperimentItem/>
                    <ExperimentItem/>
                    <ExperimentItem/>

                </div>
            </section>
        </main>
    )
}
