import React from 'react'
import Image from 'next/image'
import stake from "../assets/stake.png"
import star from "../assets/star.png"

function LandingCard() {
    return (
        <div className="pb-10 rounded-2xl bg-primary2 max-w-xs ml-4 mt-4">
           <div className="ml-20">
           <Image  src={stake} alt="Picture of the author" width={171} height={61}
                 title='hello'   />
           </div>
           <div>
               <h1 className="text-white text-center">MyStake</h1>
                <div className="flex ml-28 p-2">
                <Image  src={star} alt="Picture of the author" width={16} height={16}
                 title='hello'   />
                 <Image  src={star} alt="Picture of the author" width={16} height={16}
                 title='hello'   />
                 <Image  src={star} alt="Picture of the author" width={16} height={16}
                 title='hello'   />
                 <Image  src={star} alt="Picture of the author" width={16} height={16}
                 title='hello'   />
                 <Image  src={star} alt="Picture of the author" width={16} height={16}
                 title='hello'   />
                </div>
           </div>
           <div className="flex mt-4">
              <div className="bg-blood3 w-40 ml-4 text-center text-white rounded-l-xl">
                  <h1>Free Spins</h1>
                  <h1>20</h1>
                  <h1>On Register</h1>
              </div>
              <div className="bg-blue-400 w-40 mr-4 text-center text-white rounded-r-xl">
              <h1>Bonus</h1>
                  <h1>+100%</h1>
                  <h1>Up to $200</h1>
              </div>
           </div>
           
           <div>
             <button className="bg-blood px-20 py-4 mt-10 ml-8 rounded-xl text-white">Claim Bonus</button>
           </div>
        </div>
    )
}

export default LandingCard
