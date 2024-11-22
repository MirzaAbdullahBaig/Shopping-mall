import React from 'react'

function Banner() {
    return (
        <>
            <div className='bg-black w-full h-12 flex justify-center items-center '>


                <div className='inline-block animate-marquee  w-full'>
                    <p className='text-white font-poppins text-sm'>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <a className='ml-2 underline text-white font-bold' href="#">Shop now!</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Banner