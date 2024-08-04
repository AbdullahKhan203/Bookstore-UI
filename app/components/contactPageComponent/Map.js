import React from 'react'

export default function Map() {
  return (
    <div className='h-[300px] md:h-[380px] w-[95%] m-auto border-4 bg-red'>
        <iframe className='h-[100%] w-[100%] invert-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046086084!2d72.92448531094048!3d31.423759042271517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722493477084!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
