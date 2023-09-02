import { gsap } from "gsap"
import {ScrollTrigger} from 'gsap/all'
import React, { useEffect } from "react"
import { ProgressContainer } from "./styles"


const Progress: React.FC = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to("progress",{
            value: 100,
            scrollTrigger: {
                scrub: 0.5,
            },
        })
    }, [])
  return (
    <>
    <ProgressContainer>
    <progress max='100' value='0'></progress>

    </ProgressContainer>
    </>
  )
}

export default Progress