import React from 'react'
import HouseIcon from '../../components/icons/House'
import PhoneIcon from '../../components/icons/PhoneIcon'
import MailIcon from '../../components/icons/MailIcon'

export default function GetInTouch() {
  return (
    <div className='h-auto md:h-[430px] w-[95%] m-auto '>
        <div className="heading w-[100%] text-[32px] flex justify-start px-2 sm:px-4 md:px-8  ">Get In Touch</div>
        <div className="main md:flex h-auto w-[100%] ">
            <div className=" w-[100%] md:w-[70%]  ">
               <div className='w-[100%] h-[170px]  p-3'>
                <textarea name="" id="" className='h-[100%] w-[100%] border-2  p-2'></textarea>
                </div>
                <div className='w-[100%] h-auto flex my-2 px-2'>
                <div className='w-[50%] mx-1'>
                    <input className='h-[40px] border-2 w-[100%] px-2' type="text" name="" id="" placeholder='enter your name' />
                </div>
                <div  className='w-[50%]  mx-1 '>
                    <input  className='h-[40px]  border-2 w-[100%] px-2' type="email" name="" id="" placeholder='enter your email' />
                </div>
                </div>
                <div className="subject h-auto w-[100%]  px-3" >
                    <input className='h-[40px] w-[100%]  border-2 px-2' type="text" name="" id=""  placeholder='enter your subject'/>
                </div>
                <div className="submit w-[100%] h-auto px-4 my-4">
                    <button className='bg-transparent  hover:bg-orange-500 h-[60px] w-[120px] md:w-[200px] border-2'>Send</button>
                </div>
            </div>
            <div className=" w-[100%] md:w-[30%]  flex flex-col justify-start">
                <div className='opt flex w-[100%] h-auto  justify-start my-2'>
                    <div className='icon mx-2'><HouseIcon/></div>
                    <div>
                      <div>ButtonWood,California</div>
                      <div>Rosemead, CA 91770</div>
                    </div>
                </div>
                <div className='opt flex w-[100%] h-auto  justify-start my-2'>
                    <div className='icon mx-2'><PhoneIcon/></div>
                    <div>
                      <div>ButtonWood,California</div>
                      <div>Rosemead, CA 91770</div>
                    </div>
                </div>
                <div className='opt flex w-[100%] h-auto justify-start my-2'>
                    <div className='icon mx-2'><MailIcon/></div>
                    <div>
                      <div>ButtonWood,California</div>
                      <div>Rosemead, CA 91770</div>
                    </div>
                </div>
               
              </div>
        </div>
    </div>
  )
}
