
export default function Projects() {
    return (
      <section className='mx-auto max-w-5xl'>

      <h2 className='portfolio-section__heading text-6xl font-bold pb-8'>Projects</h2>
      <p className='pb-16'>Here you'll find my professional work. 👩‍💻</p>

      <div className='flex flex-col md:flex-row gap-8 justify-between items-center pb-16 md:pb-24'>
          <img className='w-full md:w-2/5 block opacity-40' src='/img/LTS-chair.jpg' alt=''/>                    
          <div className='w-full md:w-1/2'>
              <h3 className='pb-6 font-bold text-4xl'>Lancaster Table & Seating</h3>
              <p className='pb-4 leading-9'>Summer 2023. I had the pleasure of building the redesigned <a className='underline underline-offset-4 decoration-dotted decoration-pink-300 hover:decoration-pink-80' href="https://www.lancastertableandseating.com">Lancaster Table and Seating site</a>. I am especially proud of the react nav's animation and seamless tabbing. This was my first full site, all subpages included.</p>
          </div>
      </div>

      <div className='flex flex-col md:flex-row gap-8 justify-between items-center pb-16 md:pb-24'>
          <div className='order-2 md:order-1 w-full md:w-1/2'>
              <h3 className='pb-6 font-bold text-4xl'>Sustainability Efforts for Clark</h3>
              <p className='pb-4 leading-9'>Spring 2023. I built a new addition to the Clark Associates company website, the <a className='underline underline-offset-4 decoration-dotted decoration-pink-300 hover:decoration-pink-800' href="https://www.clarkassociatesinc.biz/sustainability/">Sustainability Efforts page</a>.</p>
          </div>
          <img className='order-1 md:order-2 w-full md:w-2/5 block opacity-70' src='/img/CA-sustain.jpg' alt=''/>                
      </div>

      <div className='flex flex-col md:flex-row gap-8 justify-between items-center pb-16 md:pb-24'>
          <img className='w-full md:w-2/5 block opacity-70' src='' alt='the homepage of my first portfolio'/>
          <div className='w-full md:w-1/2'>
              <h3 className='pb-6 font-bold text-4xl'>Derby Day 2023</h3>
              <p className='pb-4 leading-9'>Winter 2022. I front-ended the <a className='underline underline-offset-4 decoration-dotted decoration-pink-300 hover:decoration-pink-800' href="https://www.clarkassociatesinc.biz/derby/">2023 website for our annual charity event, Derby Day</a>.</p>
          </div>
      </div>


  </section>
    )
}
