import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ImageSlider from './ImageSlider'
import Card from '../Cards/Card'
import ProductSlider from './ProductSlider'
import Clothslider from './Clothslider'
import VideoSlider from './Videoslider'
import Card2 from '../Cards/Card2'
import Sign from './Sign'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

  const cardsRef = useRef(null)

  const cardsData = [
    {
      title: "Revamp your home in style",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
      ],
      texts: [
        "Cushion covers & more",
        "Figurines, vases & more",
        "Home storage",
        "Lighting solutions"
      ]
    },
    {
      title: "Upgrade your kitchen",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/Laptops_186_116_10._SY116_CB777673831_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/KitchenAppliances_186_116_10._SY116_CB777673831_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/dec/bau/ain/gw/ABdelivery_186_116._SY116_CB776314701_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/OfficeChairs_186_116_10._SY116_CB777673831_.jpg"
      ],
      texts: ["Cookware", "Storage containers", "Appliances", "Dining sets"]
    },
    {
      title: "Furniture For Your Home",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
      ],
      texts: ["Microwave", "Blankets", "Waher", "Helmet"]
    },
    {
      title: "Home Electronics | Finishing furniture",
      images: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg"
      ],
      texts: ["Makeup", "Skincare", "Haircare", "Fragrances"]
    },
    { title: "Headphones | Starting 199", images: ["https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg"], texts: ["Boat", "Zebronics", "Noise", "Boult"] }, { title: "Automative essentails | Up to 60%", images: ["https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"], texts: ["Cleaning Assesories", "Tyre & Rim care", "Helmets", "Vacuem Cleaner"] }, { title: "Amazon Brands & More", images: ["https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg"], texts: ["Bedsheets", "Curtains", "Horses", "Table"] }, { title: "Baby Care & More items", images: ["https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_2_1x._SY116_CB788857785_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_1_1x._SY116_CB788857785_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_3_1x._SY116_CB788857785_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_4_1x._SY116_CB788857785_.jpg"], texts: ["Baby diapers", "Ride one's", "RC Cars", "Baby safety "] }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current.children,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 120%',
            scrub:1,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className='bg-[#e3e6e6] min-h-[200vh] flex flex-col items-center'>

      <div className='relative w-full flex justify-center'>

        <div className='w-[1500px]'>
          <ImageSlider />
        </div>
        
        {/* Cards  */}
        <div
          ref={cardsRef}
          className='absolute top-3/6 grid grid-cols-4 gap-5 px-7'
        >
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              images={card.images}
              texts={card.texts}
            />
          ))}
        </div>

      </div>
       
       {/* Shope and cosmetic slide animation  */}
      <div className='mt-[400px] w-full flex justify-center'>
        <ProductSlider />
      </div>
      
      {/* Cloth slider animation  */}
      <div className='mt-[30px] w-full flex justify-center'>
        <Clothslider/>
      </div>

      <div className='mt-[30px] flex gap-5'>
        <Card2 image='https://m.media-amazon.com/images/I/616LGWCVDHL._AC_SY200_.jpg' text='Up to 30% off | Medicines'/>
        <Card2 image="https://images-eu.ssl-images-amazon.com/images/G/31/Pharmacy/Gateway26/BTF/AllC_Jan1_1x_pc_cc._SY304_CB774288563_.jpg" text='Medecine & Tablets'/>
        <Card2 image='https://m.media-amazon.com/images/I/51Xrk3O8r+L._AC_SY200_.jpg' text='Furniture For Home Decoration'/>
        <Card2 image='https://m.media-amazon.com/images/I/61+sTzoEtlL._AC_SY200_.jpg'text='Sleeping bag for Camping'/>
      </div>

      <div className='mt-[50px] mb-7'>
        <VideoSlider/>
      </div>

    </section>
  )
}

export default Home
