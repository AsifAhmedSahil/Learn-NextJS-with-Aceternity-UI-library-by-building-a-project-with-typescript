"use client"
import ScrollToTop from "react-scroll-up"
import { BsFillRocketFill } from "react-icons/bs";

const ScrollUpButton = () => {
  return (
    <div className="relative z-[200]">
        <ScrollToTop showUnder={160}>
        <p className="font-bold text-white border border-purple-500 rounded-full p-3 text-3xl bg-purple-800
         hover:bg-purple-500 transition-colors duration-300 animate-bounce cursor-pointer">
    <BsFillRocketFill />
</p>


        </ScrollToTop>

    </div>
  )
}

export default ScrollUpButton