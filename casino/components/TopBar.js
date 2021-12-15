import React from 'react'
import Image from 'next/image'
import flag from "../assets/flag.png"

function TopBar() {
    return (
        <div className="bg-primary2  flex">
           
    <div>
    <div className="relative text-white focus-within:text-white p-4 ">
      <span className="absolute inset-y-0 left-0 flex sm:pl-2 lg:pl-10">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 invisible lg:visible text-white"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className="py-2 text-sm text-white bg-primary rounded-xl sm:px-15 lg:px-24 focus:outline-none placeholder:text-white placeholder:text-ellipsis" placeholder="Search casinos or games" />
    </div>
    </div>

    <div className="text-white flex">
      <h1 className="ml-4 text-center border-r border-white my-5">EN</h1>
      <div className="w-20 h-10 mt-6 ml-2">
      <Image src={flag} alt="Picture of the author" width={20} height={16}
             />
      </div>
     
    </div>
    

        </div>
    )
}

export default TopBar
