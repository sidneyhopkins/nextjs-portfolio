
export default function Main() {

    return (
        <main id="main" className='min-h-screen bg-light text-dark dark:bg-dark dark:text-light'>
            <section className='mx-auto max-w-3xl px-4 sm:px-8 py-16 md:py-24 text-2xl'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex flex-col md:flex-row justify-between items-center pb-12 md:pb-24'>
                        <div className='order-2 md:order-1 w-full md:w-2/3'>
                            <h1 className='sr-only'>Sidney's portfolio</h1>
                            <p className='pb-8 text-8xl font-bold'>Hi, I'm <span className="whitespace-nowrap">Sidney</span></p>
                            <p className='leading-9 max-w-xl text-3xl'>I'm a self-taught web developer who likes building front-ends, bird watching, painting in watercolor, playing DnD, and hitting a tennis ball.</p>
                        </div>
                        <div className='order-1 md:order-2 aspect-square rounded-b-full w-5/6 md:w-1/3 md:mr-6'>
                            <img className='rounded-full object-cover aspect-square' src='/img/doodle3.png' alt=''/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
