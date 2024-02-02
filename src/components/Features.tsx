import styles from "../style"
import { bentobox1, bentobox2 } from "../assets"

const Features = () => {
  return (
    <section className={`flex flex-col  ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col sm:px-16 px-6 xl:px-0 `}
      >
        <h2 className="flex-1 font-notosans font-black tracking-tight  ss:text-[41px] ss:leading-[49.8px] text-[41.4375px] leading-[.125px]">
          Your best work happens in Help Scout
        </h2>
      </div>

      <div className={`flex my-10 ${styles.flexCenter} `}>
        <div
          className={` mr-6 my-5 relative py-8 px-12 w-[768px] h-[500px] rounded-[12px] bentobox bg-BentoBoxBlue text-white`}
        >
          <h4 className=" font-spacemono text-BentoBoxPaleMauve opacity-80 text-[16px] leading-[32px]">
            Delightful
          </h4>
          <h3 className="flex-1 font-notosans font-black text-BentoBoxPaleMauve  tracking-tight  ss:text-[41px] ss:leading-[49.8px] text-[41.4375px] leading-[.125px]">
            Customer Support
          </h3>
          <div className="btn-bentobox "></div>
          <img
            src={bentobox1}
            alt="bentobox image 1"
            className="absolute right-0 bottom-0 object-cover"
          />
          {/* TODO: fix the background later */}
          {/* <span className=" absolute  w-[80%] h-[80%] rounded-full bg-BentoBoxCircle top-80 right-[-10%]"></span> */}
        </div>
        <div
          className={` relative py-8 px-12 w-[768px] h-[500px] rounded-[12px] bentobox bg-BentoBoxIronMetal text-white`}
        >
          <h4 className=" font-spacemono text-BentoBoxPaleCeladon opacity-80 text-[16px] leading-[32px]">
            Supercharged
          </h4>
          <h3 className="flex-1 font-notosans font-black text-BentoBoxPaleCeladon tracking-tight  ss:text-[41px] ss:leading-[49.8px] text-[41.4375px] leading-[.125px]">
            Shared Inbox
          </h3>
          <div className="btn-bentobox "></div>
          <img
            className="absolute right-0 bottom-0 object-cover"
            src={bentobox2}
            alt="bentobox image 2"
          />
          {/* TODO: fix the background later */}
          {/* <span className=" absolute  w-[80%] h-[80%] rounded-full bg-BentoBoxCircle top-80 right-[-10%]"></span> */}
        </div>
      </div>
    </section>
  )
}

export default Features
