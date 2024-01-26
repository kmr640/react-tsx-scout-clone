import styles from "../style"
import { heroimage, lookingforhelp, heroqna } from "../assets"
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
        <h1 className="flex-1 font-davidlibre tracking-[-0.03em] font-light ss:text-[86px] ss:leading-[86.8px] text-[82.125px] leading-[62.125px]">
          <span className="italic">Every</span> customer conversation
        </h1>
        <h1 className="flex-1 font-notosans font-black tracking-tight  ss:text-[72px] ss:leading-[68.8px] text-[68.4375px] leading-[68.125px]">
          One unified platform
        </h1>
        <Button heroButton="text-[20.5px] leading-[65px] px-12 my-[78px] text-center font-bold">
          Explore the Platform
        </Button>
        <div className={`flex-1 flex `}>
          <img
            src={heroimage}
            alt="hero-image"
            className="w-[1320px] h-[700px]  relative"
          />
          <img
            src={lookingforhelp}
            alt="hero-image"
            className="w-[32%] h-[35%] absolute z-[5] left-[72px] bottom-[-271px] "
          />
          <img
            src={heroqna}
            alt="hero-image"
            className="w-[18%] h-[45%] absolute z-[5] bottom-[-271px] right-[72px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
