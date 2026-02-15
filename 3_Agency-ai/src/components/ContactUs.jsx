import React from 'react'
import Titls from './Titls'
import assets from '../assets/assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {
    //  const [result, setResult] = useState("");
    const onSubmit =  async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
       formData.append("access_key", "daf48f67-378d-4027-81f8-02c509d5b936");

        try {
                const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    // setResult(data.success ? "Success!" : "Error");


    if(data.success){
        toast.success('Thanku for submission');
        event.target.reset();
    }else{
        toast.error(data.message);
    }
        } catch (error) {
            toast.error(error.message);
        }

    }
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'> 
    <Titls title='Reach Out us ' desc='From stratergy to execution, we can craft digital solutions that move your bussiness forward' />

    <form  onSubmit={onSubmit}className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full ' >

        <div>
            <p className='mb-2 text-sm font-medium'>Your Name</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 '>
                <img src={assets.person_icon} alt="" />
                <input type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' name='name' required/>
            </div>
        </div>

        <div>
            <p className='mb-2 text-sm font-medium'>Email Id </p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 '>
                <img src={assets.email_icon} alt="" />
                <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' name='email' required/>
            </div>
        </div>

        <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium'>Message</p>
            <textarea  name='message'rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300' required/>
        </div>

        <button type="submit" className='w-max flex gap-2 bg-primary text-blue text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
            Submit <img src={assets.arrow_icon} alt="" className='w-5 h-5 text-black dark:text-white' />

        </button>
    </form>
    </div>
  )
}

export default ContactUs