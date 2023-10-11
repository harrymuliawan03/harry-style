import Profile from "/images/profile.png";

export default function Introduction() {
  return (
    <section className="flex flex-wrap">
      <div className="relative w-full mx-4 mt-24 sm:my-0 sm:mx-0 self-center lg:w-1/2">
        <h1 className="text-xl font-semibold text-primary">
          Halo{" "}
          <span className="inline-block animate-waving-hand text-2xl">👋</span>,
          saya{" "}
          <span className="mt-4 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
            Harry Muliawan
          </span>
        </h1>
        <h2 className="mb-5 text-lg font-medium text-secondary_bold dark:text-secondary lg:text-2xl">
          Software{" "}
          <span className="text-dark dark:text-white">Engineering</span>
        </h2>
        <p className="mb-10 font-medium leading-relaxed text-secondary_bold dark:text-secondary">
          Passionate and seasoned Software Engineer with a strong focus on
          frontend development. Proficient in TypeScript and well-versed in all
          aspects of web technologies. Collaborative team player dedicated to
          delivering efficient, scalable, and visually appealing web
          applications.
        </p>

        <a
          href="https://wa.link/u6v7bj"
          className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
        >
          Hubungi Saya
        </a>
        <div className="absolute right-32 top-72 sm:right-[12rem] sm:top-[17.5rem] animate-heart">
          <a href="https://wa.link/u6v7bj" target="_blank">
            <img src="/images/wa.svg" width={45} height={45} alt="" />
          </a>
        </div>
      </div>
      <div className="w-full self-end px-4 lg:w-1/2">
        <div className="relative mt-2 lg:right-0 lg:mt-9">
          <img
            src={Profile}
            alt="Harry Muliawan"
            width={400}
            height={400}
            className="relative z-10 mx-auto max-w-full"
          />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:scale-150 animate-fade_in">
            <svg
              className="h-[376px] sm:h-[420px]"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#14b8a6"
                d="M30.3,-18.1C43.8,-7.2,62.4,5.6,61.6,16C60.8,26.4,40.6,34.4,20.4,45.1C0.3,55.8,-19.8,69.3,-28.9,63.6C-37.9,57.8,-36,32.8,-33.9,15.3C-31.9,-2.1,-29.7,-12,-24,-21.1C-18.3,-30.2,-9.2,-38.5,-0.4,-38.2C8.4,-37.9,16.8,-29,30.3,-18.1Z"
                className=" translate-x-20 sm:translate-x-[5rem] translate-y-[9rem] sm:translate-y-[6rem] rotate-[-10deg] scale-125 sm:scale-100"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
