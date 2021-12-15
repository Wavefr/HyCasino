import React from 'react'
import Image from 'next/image'
import logo from "../assets/logo.png"
import cherry from "../assets/cherry.png"
import gift from "../assets/gift.png"
import games from "../assets/games.png"
import blog from "../assets/blog.png"
import pic from "../assets/pic.png"

function SideBar() {
    return (
        <div className="max-w-full md:max-w-2xl lg:max-w-2xl h-full bg-primary2 text-white font-medium">
            <div className="p-6 justify-center">
            <Image src={logo} alt="Picture of the author" width={221} height={96}
             />
            </div>

            <div>
                <ul className="ml-10">
                    <div className="flex">
                    <Image src={cherry} alt="Picture of the author" width={25} height={25}
                    />
                    <li className="text-base text-blood ml-2">Casinos</li>
                    </div>
                    <div className="flex mt-10">
                    <Image src={gift} alt="Picture of the author" width={25} height={25}
                    />
                    <li className="text-base  ml-2 hover:text-blood hover:cursor-pointer">Bonuses</li>
                    </div>
                    <div className="flex mt-10">
                    <Image src={games} alt="Picture of the author" width={25} height={25}
                    />
                    <li className="text-base  ml-2 hover:text-blood hover:cursor-pointer">Games</li>
                    </div>
                    <div className="flex mt-10">
                    <Image src={blog} alt="Picture of the author" width={25} height={25}
                    />
                    <li className="text-base  ml-2 hover:text-blood hover:cursor-pointer">Blog</li>
                    </div>
                </ul>
            </div>

            <div className="mb-4">
                <ul className="ml-8">
                    <li className="p-2 bg-primary mr-24 rounded-xl mt-4">Popular Categories</li>
                    <li className="p-2 bg-primary mr-24 rounded-xl mt-4">Casino Reviews</li>
                    <li className="p-2 bg-primary mr-24 rounded-xl mt-4">Casino Bonuses</li>
                    <li className="p-2 bg-primary mr-24 rounded-xl mt-4">No Deposit</li>
                    <li className="p-2 bg-primary mr-24 rounded-xl mt-4">Popular Slots</li>
                    <li className="p-2 text-gray-600 mr-24 border-solid border-b-2 mt-4 ">SHOW MORE</li>
                </ul>
            </div>
            
            <div className="ml-6 mt-10 pb-10">
            <Image src={pic} alt="Picture of the author" width={243} height={326}
                    />
            </div>
        </div>
    )
}

export default SideBar
