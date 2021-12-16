import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ginie from "../assets/ginie.png"
import home from "../assets/home1.png"
import home2 from "../assets/home2.png"
import home3 from "../assets/home3.png"
import group from "../assets/group.png"
import LandingCard from './LandingCard'

function Landing() {
    return (
        <div className="bg-primary max-h-full">
            <div className="pt-4">
                <h1 className="text-white text-center text-lg font-bold">Comparez les meilleurs casinos en ligne et bonus de dépôt
                </h1>
                <h1 className="text-white text-center font-medium text-sm">Bénéficiez d'offres de bonus exclusives pour vos casinos et machines à sous préférées
                </h1>
            </div>
           
          
            <div className="pl-1 lg:pl-20 rounded-lg mt-10 relative px-auto">
            <a class="absolute inset-0 z-10 rounded-2xl bg-gray-700 text-white text-lg text-center flex flex-col items-center justify-center opacity-0 hover:opacity-50 bg-opacity-90 duration-300">
           <Link href="/">
             <a>Claim Bonus</a>
           </Link>
      </a>
            <Image className="flex flex-wrap content-center" src={ginie} alt="Picture of the author" width={912} height={385}
                 title='hello'   />
            </div>
          
          <div className="flex flex-col ml-4 lg:flex-row lg:ml-12 mt-4">
              <div className="mt-4">
              <Image className="flex flex-wrap content-center" src={home} alt="Picture of the author" width={302} height={205}
                 title='hello'   />
              </div>
              <div className="ml-2">
              <Image className="flex flex-wrap content-center" src={home2} alt="Picture of the author" width={302} height={205}
                 title='hello'   />
              </div>
              <div className="ml-2">
              <Image className="flex flex-wrap content-center" src={home3} alt="Picture of the author" width={302} height={205}
                 title='hello'   />
              </div>
          </div>

          <div className="pt-4">
                <h1 className="text-white text-center text-lg font-bold">Comparez les meilleurs casinos en ligne et bonus de dépôt
                </h1>
                <h1 className="text-white text-center font-medium text-sm">Bénéficiez d'offres de bonus exclusives pour vos casinos et machines à sous préférées
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mr-4 mt-6">
                <LandingCard/>
                <LandingCard/>
                <LandingCard/>

                <LandingCard/>
                <LandingCard/>
                <LandingCard/>

                <LandingCard/>
                <LandingCard/>
                <LandingCard/>
                
            </div>

            <div className="pt-10">
                <h1 className="text-white text-center text-lg font-bold">Comparez les meilleurs casinos en ligne et bonus de dépôt
                </h1>
                <h1 className="text-white text-center font-medium text-sm">Bénéficiez d'offres de bonus exclusives pour vos casinos et machines à sous préférées
                </h1>
            </div>

            <div className="invisible lg:visible ml-16 mt-10">
            <Image className="" src={group} alt="Picture of the author" width={902} height={372}
                 title='hello'   />
            </div>

            <div className="text-white mt-10 pb-10">
                <h1 className="text-center">FAQ</h1>
                <p className="text-center">Do you have any questions? We have the answers. Browse our FAQ section and resolve your concerns instantly.
                </p>
                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">How many payment methods can I use?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>

                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">How can I deposit in an online casino?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>

                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">How do I know if an online casino is safe?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>

                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">How can I withdraw my winnings?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>

                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">How do I know if an online casino is safe?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>

                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">What are bonuses?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>

                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">What are wagering requirements?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>

                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">
                    What if I don't want to receive bonuses?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>

                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">What are free spins bonuses?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>

                <div className="flex px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl">
                <h1 className="">What are payout percentages?</h1>
                 <p className="bg-blood text-white rounded-full ml-auto px-2 text-right">+</p>
                </div>
               
            </div>

          



         
        </div>
    )
}

export default Landing
