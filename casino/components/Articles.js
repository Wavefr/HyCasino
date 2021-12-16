import React from 'react'
import Image from 'next/image'
import ArticlesData from '../data/ArticlesData'

function Articles() {
    return (
        <div className="bg-primary text-white">
           

            <div>
                <h1 className="font-medium pl-4 pt-6">Articles </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    ArticlesData.map((m)=>(
                        <div className="hover:cursor-pointer">
                        <Image src={m.image} alt="Picture of the author" width={340} height={245}
                            />
                            <h1 className="ml-4 pb-5">{m.title}</h1>
                            
                        </div>
                    ))
                }
                </div>
                <div className="p-10 ml-1 lg:ml-20">
                <button className="hover:cursor-pointer text-center rounded-lg py-5 px-10 bg-blood ml-10 lg:ml-80">More Articles</button>
                </div>
               </div>
        </div>
    )
}

export default Articles
