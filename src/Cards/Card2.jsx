import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Card2 = ({image,text}) => {
     const cardsRef = useRef(null)
    useEffect(()=>{
      const ctx = gsap.context(()=>{
        gsap.from(cardsRef.current,{
            y: 80,
            opacity:0,
            duration:0.8,
            ease:"power3.out",
            stagger:0.15,
            scrollTrigger:{
                trigger: cardsRef.current,
                scrub:1,
                start: "top 85%",
                toggleActions: "play none none reverse"
                
                
            }
        })
      })

      return () => ctx.revert()
    },[])
  return (
    <section>
        <div ref={cardsRef} className=' w-[350px] h-[360px] px-5 py-3 shadow shadow-2xl shadow-gray-300 bg-white overflow-hidden'>
            <h1 className='mb-2 font-bold text-xl'>{text}</h1>
            <img src={image}
             alt="" 
            className=' h-[270px]  object-cover cursor-pointer hover:scale-95 duration-300'/>
            <p className='mt-2 text-blue-500 hover:text-blue-600 cursor-pointer'>Visit The Store</p>
        </div>
    </section>
  )
}

export default Card2