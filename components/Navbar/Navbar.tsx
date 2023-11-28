const Navbar = () => {
  return (
    <nav className="w-full flex justify-center items-center font-bold mb-[2rem] px-[29.6%] md:px-[var(--container-padding-tablet)] md:h-[5.75rem] lg:px-[var(--container-padding-desktop)] z-50 absolute">

        {/* Navbar main */}
        <main className="wrapper w-auto flex flex-col justify-center md:flex-row md:justify-between md:items-center md:w-full">
          <section className="text-white text-[2rem] mt-[1.625rem]">adamkeyes</section>
          <section className="social-links-icon flex justify-between mt-[1.625rem] w-full md:w-1/4 lg:mr-[1.875rem]">
              <img src="/images/icon-github.svg" alt="github icon" />
              <img src="/images/icon-frontend-mentor.svg" alt="frontend mentor icon" />
              <img src="/images/icon-linkedin.svg" alt="linkedin icon" />
              <img src="/images/icon-twitter.svg" alt="twitter icon" />
          </section>
        </main>
    </nav>
  )
}

export default Navbar