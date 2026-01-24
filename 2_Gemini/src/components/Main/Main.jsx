import React from 'react'
import { assets } from '../../assets/asset/assets'
import './Main.css'
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p> </div>
            <img  className='profile' src={assets.user_icon} alt="" />
       
        <div className="main-container">
            <div className="greet">
                <p><span>Hello , Sakshi..</span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to visit on a trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                   <div className="card">
                    <p>Breifly suggest the concept : urban planning </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                   <div className="card">
                    <p>Brainstorm team bonding activites for our next trip</p>
                    <img src={assets.message_icon} alt="" />
                </div>

                   <div className="card">
                    <p>Improve the readibilty of following road maps</p>
                    <img src={assets.code_icon} alt="" />
                </div>

            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here ' />
                    <div className='start-icons'>
                    <img src={assets.gallery_icon} alt='' />
                        <img src={assets.mic_icon} alt="" />
                        <img  className ='end-icon'src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display info ,including people,so double click
                </p>
            </div>
        </div>
    </div>
)
}

export default Main