import React from 'react'
import assets from '../assets/assets/assets'
import Titls from './Titls'
import ServiceCard from './ServiceCard'

const Services = () => {
    const Services=[
        {
            title:'Advertising',
            description:'We turn bold ideas into powerful digital solution that , conect engaed ..',
            icons:assets.ads_icon
        },

          {
            title:'Content marketing ',
            description:'We can help you execute your plan and deliver results ',
            icons:assets.marketing_icon
        },
          {
            title:'Content writing ',
            description:'We turn bold ideas into powerful digital solution that , conect engaed ..',
            icons:assets.content_icon
        },

          {
            title:'Social media',
            description:'We help you build a strong social media presence',
            icons:assets.social_icon
        },
    ]


  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />

        <Titls title='How can we help ' desc='From stratergy to execution, we can craft digital solutions that move your bussiness forward'/>

        <div className='flex flex-col md:grid grid-cols-2'>
          {Services.map((service,index) => (
            <ServiceCard key={index} service={service} index={index}/>
          ))}
        </div>
    </div>
  )
}

export default Services