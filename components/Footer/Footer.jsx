import "./styles/Footer.scss";

const Footer = () => {
  return (
    <main className="bg-[var(--site-dark-grey)] w-full px-[1rem] pb-[3.75rem] flex flex-col items-center md:justify-between md:px-[1.875rem] md:pt-[2.9375rem] lg:px-[var(--container-padding-desktop)]">
        <hr className='w-full text-white border-t-[1px] z-20 relative md:mb-[1.875rem]' />

        <div className="flex flex-col md:flex-row justify-between w-auto max-md:px-[5.875rem] md:w-full">
            <section className="text-white text-[2rem] mt-[2.4375rem] md:mt-0">adamkeyes</section>
            <section className="social-links-icon flex justify-between mt-[1.625rem] w-full relative md:h-[2rem] md:mt-[0.5rem] md:w-[15.415rem]">
                <img src="/images/icon-github.svg" alt="github icon" />
                <img src="/images/icon-frontend-mentor.svg" alt="frontend mentor icon" />
                <img src="/images/icon-linkedin.svg" alt="linkedin icon" />
                <img src="/images/icon-twitter.svg" alt="twitter icon" />
            </section>
        </div>
    </main>
  )
}

export default Footer