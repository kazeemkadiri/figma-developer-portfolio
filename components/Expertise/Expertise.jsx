const Expertise = () => {
  return (
    <main className="expertise relative w-full md:px-[var(--container-padding-tablet)] lg:px-[var(--container-padding-desktop)]">
        <hr className='w-full text-white border-t-[1px] my-[3.75rem] lg:mt-[6.5rem] lg:mb-[4.5rem]' />

        {/* List of skills and experience */}
        <section className="skills-experience pb-[2.22rem] w-full grid md:grid-cols-2 lg:grid-cols-3">
            <div className="skill mb-[1.33rem]">
                <h5 className="text-[2rem] text-white font-bold text-center md:text-start md:text-[3rem]">HTML</h5>
                <p className="text-[1rem] text-white text-center md:text-start md:text-[1.125rem]">4 years experience</p>
            </div>

            <div className="skill mb-[1.33rem]">
                <h5 className="text-[2rem] text-white font-bold text-center md:text-start md:text-[3rem]">CSS</h5>
                <p className="text-[1rem] text-white text-center md:text-start md:text-[1.125rem]">4 years experience</p>
            </div>

            <div className="skill mb-[1.33rem]">
                <h5 className="text-[2rem] text-white font-bold text-center md:text-start md:text-[3rem]">Javascript</h5>
                <p className="text-[1rem] text-white text-center md:text-start md:text-[1.125rem]">4 years experience</p>
            </div>

            <div className="skill mb-[1.33rem]">
                <h5 className="text-[2rem] text-white font-bold text-center md:text-start md:text-[3rem] break-all">Accessibility</h5>
                <p className="text-[1rem] text-white text-center md:text-start md:text-[1.125rem]">4 years experience</p>
            </div>

            <div className="skill mb-[1.33rem]">
                <h5 className="text-[2rem] text-white font-bold text-center md:text-start md:text-[3rem]">React</h5>
                <p className="text-[1rem] text-white text-center md:text-start md:text-[1.125rem]">3 years experience</p>
            </div>

            <div className="skill">
                <h5 className="text-[2rem] text-white font-bold text-center md:text-start md:text-[3rem]">Sass</h5>
                <p className="text-[1rem] text-white text-center md:text-start md:text-[1.125rem]">3 years experience</p>
            </div>
        </section>

        <hr className='w-full text-white border-t-[1px] md:hidden z-20 relative' />

        {/* Rings image */}
        <img src="/images/pattern-rings.svg" className="z-10 absolute right-[-13.5rem] bottom-[-4rem] md:bottom-[-0.5rem] md:right-[-18rem]" />
    </main>
  )
}

export default Expertise