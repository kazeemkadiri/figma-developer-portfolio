import './styles/Hero.scss';

const Hero = () => {
  return (
    <div className="w-full relative h-auto">
    {/* Rings image */}
    <img src="/images/pattern-rings.svg" className="z-10 absolute h-[8.0625rem] top-[7.75rem] translate-x-[-53%] md:top-[5.375rem] lg:translate-x-[-18.86%] lg:left-[0%] lg-w-[33.125rem]" alt="Pattern Rings image" />

        {/* Hero text and image */}
        <section className="relative z-20 hero-container__hero-text-image flex flex-col items-center w-full h-full md:flex-row lg:px-[var(--container-padding-desktop)] lg:w-auto">
                
                {/* This is rendered for mobile screens */}
                <div className="mobile-image z-30 w-full relative mr-[0%] mb-[2.5rem] flex md:hidden">
                    <img src="/images/image-profile-mobile.webp" className="relative w-[46.4%] right-[-26%] border-[var(--site-green)] hover:border-[1px] border-solid" />

                    <img src="/images/pattern-circle.svg" className="z-50 absolute h-[8.0625rem] bottom-0 right-[-4rem]" alt="Pattern circle image" />
                </div>

                {/* Container for all hero text */}
                <section className="max-md:relative z-40 md:absolute md:top-[9.4375rem] px-[1.3125rem] md:w-[67%] md:pl-[var(--container-padding-tablet)] md:flex md:flex-col md:justify-between md:items-start md:h-[28.0625rem] md:mb-[3.75rem] lg:h-[23.0625rem] lg:w-[53%] lg:pl-0 lg:justify-normal">
                    
                    <p className="text-white text-center text-[2.5rem] font-bold md:pl-0 md:text-start md:text-[4.5rem] leading-[1]">
                        Nice to meet you!
                        I'm <span className="underline underline-offset-[8px] decoration-[#4EE1A0]">Adam Keyes.</span>   
                    </p>

                    <p className="text-white flex text-center text-4 max-md:mt-[1.25rem] md:pl-0 md:text-start md:text-[1.2rem] md:w-[85%] lg:mt-[2.05rem] lg:w-[24.72rem] lg:flex-grow-0 lg:text-base">
                        Based in the UK, I'm a front-end developer passionate about 
                        building web apps with superb user experiences.
                    </p>

                    <p className="w-full flex justify-center mt-6 md:mt-[unset] md:justify-start lg:flex lg:mt-[4.125rem]"><button className="border-[var(--site-green)] border-solid border-b-[2px] text-white hover:text-[var(--site-green)] md:text-[1.3rem] lg:text-[1.1rem]"><a href="#contact-me">CONTACT ME</a></button></p>
                </section>
                
                {/* This is rendered for tablet screens */}
                <div className="tablet-image z-30 w-full md:mt-0 h-auto relative hidden md:flex lg:hidden">
                    <img src="/images/image-profile-tablet.webp" className="relative w-[42%] border-[var(--site-green)] hover:border-[1px] border-solid" />

                    <img src="/images/pattern-circle.svg" className="z-50 absolute h-[8.0625rem] bottom-0 right-[-4rem]" alt="Pattern circle image" />

                    {/* The "Contact Me" button is placed here so that it aligns with the bottom of the hero image on window resize*/}
                    {/* <p className="absolute bottom-0 left-[var(--container-padding-tablet)]"><button className="border-[var(--site-green)] border-solid border-b-[2px] text-white hover:text-[var(--site-green)] md:text-[1.3rem] lg:text-[1.1rem]">CONTACT ME</button></p> */}
                </div>

                {/* This is rendered for desktop screens */}
                <div className="desktop-image z-30 relative w-[23.4rem] mr-[7rem] h-auto !hidden lg:!flex">
                    <img src="/images/pattern-circle.svg" className="z-50 relative h-[7.095rem] translate-x-[3.5rem] mt-[26rem]" alt="Pattern circle image" />

                    <img src="/images/image-profile-desktop.webp" className="relative w-full border-[var(--site-green)] hover:border-[1px] border-solid" />
                </div>
        </section>
    </div>
  )
}

export default Hero