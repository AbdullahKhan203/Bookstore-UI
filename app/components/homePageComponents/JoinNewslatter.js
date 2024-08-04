// "use client"
export default function JoinNewslatter() {
  return (

<div className="bg-[url('/newsLetter.jpeg')] m-auto h-[300px] w-[95%] flex flex-col gap-2 items-center justify-center my-2">
   
<h1 className='text-white text-[32px]'>Join Newsletter</h1>
<p className='text-white px-[50px] md:px-[120px] text-center text-[10px]  sm:text-[15px] md:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corrupti earum laboriosam, laborum animi eaque odit cupiditate neque vitae quidem in, quam quae atque reprehenderit, labore vero perspiciatis tenetur harum.</p>
<div className="input-subcribe  px-2 md:px-0 flex flex-col md:flex-row gap-1">
  <input type="text"  className='w-[100%] md:w-[250px] px-2 md:px-0 h-[35px] bg-white border-2 me-2  rounded-[50px]' />
<button className='h-[35px] w-[100%] md:w-[100px] bg-orange-400 rounded-[50px] '>Subcribe</button>
</div>
</div>



  )
}
