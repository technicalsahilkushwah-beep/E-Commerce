import React, { useEffect, useRef } from 'react'
import cart from '../assets/images/cart_icon.png'
import Nav2 from './Nav2'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Nav = () => {

  const nav2Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const showNav = gsap.fromTo(
        nav2Ref.current,
        { y: -40 },
        {
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
          paused: true,
        }
      ).progress(1)

      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          if (self.direction === -1) {
            showNav.play() 
          } else {
            showNav.reverse() 
          }
        },
      })

    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* first header  */}
      <header className='fixed top-0 left-0 z-50 bg-[#131921] w-full h-16 flex items-center'>

        <img
          src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png"
          alt=""
          className='w-25 ml-8 mt-2'
        />

        <div className='ml-8'>
          <h1 className='text-gray-400 text-[14px] font-medium'>
            Delivery to Bhopal 462030
          </h1>
          <p className='text-white font-bold'>
            <i className='fa fa-location-dot text-2xl mr-1'></i>
            Update Location
          </p>
        </div>

        <div className='ml-20 w-[600px] h-11 rounded-lg flex items-center bg-white'>
          <input
            type="text"
            placeholder='Search Amazon.in'
            className='flex-1 ml-5 outline-none'
          />
          <button className='bg-[#febd69] h-11 w-13 rounded-r-lg hover:bg-amber-400'>
            <i className='fa fa-search text-gray-700'></i>
          </button>
        </div>

        <div className='flex ml-7 space-x-1 items-center mt-5 cursor-pointer'>
          <img
            src="https://img.freepik.com/premium-vector/flag-india-rectangle-icon-illustration-india-flag-rectangular-flag-standard-size_833685-3618.jpg"
            alt=""
            className='w-6 h-4'
          />
          <span className='text-white font-bold'>EN</span>
        </div>

        <div className='ml-7'>
          <h1 className='text-gray-100 text-[13px]'>Hello, sign in</h1>
          <p className='text-white font-bold'>Account & Lists</p>
        </div>

        <div className='ml-7'>
          <h1 className='text-gray-100 text-[13px]'>Returns</h1>
          <p className='text-white font-bold'>& Orders</p>
        </div>

        <div className='ml-8 cursor-pointer w-24 mt-2'>
          <img src={cart} alt="" />
        </div>
      </header>

       
       {/* secoun header  */}
      <div ref={nav2Ref} className='sticky top-16 z-40'>
        <Nav2 />
      </div>
    </>
  )
}

export default Nav
