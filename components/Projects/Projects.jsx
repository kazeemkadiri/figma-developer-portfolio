const Projects = () => {
  return (
    <main className="projects w-full px-4 md:px-[var(--container-padding-tablet)] lg:px-[var(--container-padding-desktop)] mt-20">
        <section className="flex justify-between">
            <h3 className="text-[2.5rem] text-white font-bold">Projects</h3>
            <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] cursor-pointer hover:text-[var(--site-green)]"><a href="#contact-me" className="decoration-none">CONTACT ME</a></span>
        </section>

      <div className="my-[2.5rem] grid md:grid-cols-2 lg:grid-cols-2 gap-[1.5rem]">
        <section className="project mb-[2.5rem]">
          <div className="image-container relative">
            <img src="/images/thumbnail-project-1-small.webp" className="w-full relative" alt="design portfolio image" />
          
            {/* Overlay shown on hover */}
            <div className="overlay absolute bg-transparent w-full h-full cursor-pointer z-10 top-[0%] border-[1px] border-[var(--site-green)] border-solid">
              <div className="absolute h-full w-full bg-[#000] opacity-0 hover:opacity-70 z-20 flex justify-center items-center">
                <div className="flex flex-col relative z-30">
                  <span className="text-base text-white text-center font-bold w-auto leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] mb-[3rem] cursor-pointer">VIEW PROJECT</span>
                  <span className="text-base text-white text-center font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] cursor-pointer">VIEW CODE</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="project__title text-white text-[1.5rem] font-bold mt-[1.25rem]">DESIGN PORTFOLIO</h2>
          <div className="project__technologies my-[1.25rem]">
            <ul className="list-none flex gap-[1rem]"><li className="text-[var(--site-grey)]">HTML</li><li className="text-white text-[var(--site-grey)]">CSS</li></ul>
          </div>
          <div className="project__action flex lg:hidden">
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] mr-3 hover:text-[var(--site-green)] cursor-pointer">VIEW PROJECT</span>
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] cursor-pointer">VIEW CODE</span>
          </div>
        </section>
        
        <section className="project mb-[2.5rem]">
          <div className="image-container relative">
            <img src="/images/thumbnail-project-2-small.webp" className="w-full relative" alt="e-learning image" />
          
            {/* Overlay shown on hover */}
            <div className="overlay absolute bg-transparent w-full h-full cursor-pointer z-10 top-[0%] border-[1px] border-[var(--site-green)] border-solid">
              <div className="absolute h-full w-full bg-[#000] opacity-0 hover:opacity-70 z-20 flex justify-center items-center">
                <div className="flex flex-col relative z-30">
                  <span className="text-base text-white text-center font-bold w-auto leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] mb-[3rem]">VIEW PROJECT</span>
                  <span className="text-base text-white text-center font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)]">VIEW CODE</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="project__title text-white text-[1.5rem] font-bold mt-[1.25rem]">E-LEARNING LANDING PAGE</h2>
          <div className="project__technologies my-[1.25rem]">
            <ul className="list-none flex gap-[1rem]"><li className="text-[var(--site-grey)]">HTML</li><li className="text-white text-[var(--site-grey)]">CSS</li></ul>
          </div>
          <div className="project__action flex lg:hidden">
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] mr-3 hover:text-[var(--site-green)] cursor-pointer">VIEW PROJECT</span>
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] cursor-pointer">VIEW CODE</span>
          </div>
        </section>

        <section className="project mb-[2.5rem]">
          <div className="image-container relative">
            <img src="/images/thumbnail-project-3-small.webp" className="w-full relative" alt="todo web app image" />
          
            {/* Overlay shown on hover */}
            <div className="overlay absolute bg-transparent w-full h-full cursor-pointer z-10 top-[0%] border-[1px] border-[var(--site-green)] border-solid">
              <div className="absolute h-full w-full bg-[#000] opacity-0 hover:opacity-70 z-20 flex justify-center items-center">
                <div className="flex flex-col relative z-30">
                  <span className="text-base text-white text-center font-bold w-auto leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] mb-[3rem]">VIEW PROJECT</span>
                  <span className="text-base text-white text-center font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)]">VIEW CODE</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="project__title text-white text-[1.5rem] font-bold mt-[1.25rem]">TODO WEB APP</h2>
          <div className="project__technologies my-[1.25rem]">
            <ul className="list-none flex gap-[1rem]"><li className="text-[var(--site-grey)]">HTML</li><li className="text-white text-[var(--site-grey)]">CSS</li><li className="text-[var(--site-grey)]">JAVASCRIPT</li></ul>
          </div>
          <div className="project__action flex lg:hidden">
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] mr-3 hover:text-[var(--site-green)] cursor-pointer">VIEW PROJECT</span>
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] cursor-pointer">VIEW CODE</span>
          </div>
        </section>

        <section className="project mb-[2.5rem]">
          <div className="image-container relative">
            <img src="/images/thumbnail-project-4-small.webp" className="w-full relative" alt="entertainment web app image" />

            {/* Overlay shown on hover */}
            <div className="overlay absolute bg-transparent w-full h-full cursor-pointer z-10 top-[0%] border-[1px] border-[var(--site-green)] border-solid">
              <div className="absolute h-full w-full bg-[#000] opacity-0 hover:opacity-70 z-20 flex justify-center items-center">
                <div className="flex flex-col relative z-30">
                  <span className="text-base text-white text-center font-bold w-auto leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] mb-[3rem]">VIEW PROJECT</span>
                  <span className="text-base text-white text-center font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)]">VIEW CODE</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="project__title text-white text-[1.5rem] font-bold mt-[1.25rem]">ENTERTAINMENT WEB APP</h2>
          <div className="project__technologies my-[1.25rem]">
            <ul className="list-none flex gap-[1rem]"><li className="text-[var(--site-grey)]">HTML</li><li className="text-white text-[var(--site-grey)]">CSS</li><li className="text-[var(--site-grey)]">JAVASCRIPT</li></ul>
          </div>
          <div className="project__action flex lg:hidden">
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] mr-3 hover:text-[var(--site-green)] cursor-pointer">VIEW PROJECT</span>
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] cursor-pointer">VIEW CODE</span>
          </div>
        </section>

        <section className="project mb-[2.5rem]">
          <div className="image-container relative">
            <img src="/images/thumbnail-project-5-small.webp" className="w-full relative" alt="memory game image" />

            {/* Overlay shown on hover */}
            <div className="overlay absolute bg-transparent w-full h-full cursor-pointer z-10 top-[0%] border-[1px] border-[var(--site-green)] border-solid">
              <div className="absolute h-full w-full bg-[#000] opacity-0 hover:opacity-70 z-20 flex justify-center items-center">
                <div className="flex flex-col relative z-30">
                  <span className="text-base text-white text-center font-bold w-auto leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] mb-[3rem]">VIEW PROJECT</span>
                  <span className="text-base text-white text-center font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)]">VIEW CODE</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="project__title text-white text-[1.5rem] font-bold mt-[1.25rem]">MEMORY GAME</h2>
          <div className="project__technologies my-[1.25rem]">
            <ul className="list-none flex gap-[1rem]"><li className="text-[var(--site-grey)]">HTML</li><li className="text-white text-[var(--site-grey)]">CSS</li><li className="text-[var(--site-grey)]">JAVASCRIPT</li></ul>
          </div>
          <div className="project__action flex lg:hidden">
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] mr-3 hover:text-[var(--site-green)] cursor-pointer">VIEW PROJECT</span>
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] cursor-pointer">VIEW CODE</span>
          </div>
        </section>

        <section className="project mb-[2.5rem]">
          <div className="image-container relative">
            <img src="/images/thumbnail-project-6-small.webp" className="w-full relative" alt="art gallery showcase image" />

            {/* Overlay shown on hover */}
            <div className="overlay absolute bg-transparent w-full h-full cursor-pointer z-10 top-[0%] border-[1px] border-[var(--site-green)] border-solid">
              <div className="absolute h-full w-full bg-[#000] opacity-0 hover:opacity-70 z-20 flex justify-center items-center">
                <div className="flex flex-col relative z-30">
                  <span className="text-base text-white text-center font-bold w-auto leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)] mb-[3rem]">VIEW PROJECT</span>
                  <span className="text-base text-white text-center font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] hover:text-[var(--site-green)]">VIEW CODE</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="project__title text-white text-[1.5rem] font-bold mt-[1.25rem]">ART GALLERY SHOWCASE</h2>
          <div className="project__technologies my-[1.25rem]">
            <ul className="list-none flex gap-[1rem]"><li className="text-[var(--site-grey)]">HTML</li><li className="text-white text-[var(--site-grey)]">CSS</li><li className="text-[var(--site-grey)]">JAVASCRIPT</li></ul>
          </div>
          <div className="project__action flex lg:hidden">
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)] mr-3 hover:text-[var(--site-green)] cursor-pointer">VIEW PROJECT</span>
          <span className="text-base text-white font-bold leading-[3] border-solid border-b-[2px] border-[var(--site-green)]  hover:text-[var(--site-green)] cursor-pointer">VIEW CODE</span>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Projects