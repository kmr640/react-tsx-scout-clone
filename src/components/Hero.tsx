import styles from "../style"

import Button from "./Button"

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row  ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col sm:px-16 px-6 xl:px-0 `}
      >
        <h1 className="flex-1 font-ibarra font-thin ss:text-[72px] ss:leading-[100.8px] text-[82.125px] leading-[82.125px]">
          <span className="italic">Every</span> customer conversation
        </h1>
        <h1 className="flex-1 font-gtamerica font-black ss:text-[72px] ss:leading-[100.8px] text-[68.4375px] leading-[82.125px]">
          One unified platform
        </h1>
        <Button heroButton="text-[20.5px] leading-[65px] px-12 mt-6 text-center font-bold">
          Explore the Platform
        </Button>
      </div>
    </section>
  )
}

export default Hero
