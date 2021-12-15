import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ginie from "../assets/ginie.png"

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
          
          


          <ul>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
          </ul>
        </div>
    )
}

export default Landing
