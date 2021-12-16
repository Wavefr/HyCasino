import React from 'react'
import Image from 'next/image'
import fArticles from '../data/featuredArticles'
import categories from '../data/categories'
   
function BlogArticleCard() {
    console.log(fArticles)
    return (
        <div className="bg-primary text-white">
            <div>
                <h1 className="font-bold text-center text-xl pt-6">Blog casino en ligne</h1>
            </div>

            <div>
                <h1 className="font-medium pl-4 pt-6">Articles à absolument voir</h1>
                <div className="flex">
                {
                    fArticles.map((m)=>(
                        <div className="hover:cursor-pointer">
                        <Image src={m.image} alt="Picture of the author" width={540} height={345}
                            />
                            <h1 className="px-4 py-2 mt-4 bg-primary2 mx-4 rounded-3xl ml-4 pb-5 hover:cursor-pointer hover:text-blood">{m.title}</h1>
                        </div>
                    ))
                }
                </div>
               </div>

    <div>
    <h1 className="font-medium pl-16 pt-6">Categories</h1>
    <div className="flex ml-6">
    
    {
                    categories.map((m)=>(
                        <div className="hover:cursor-pointer">
                        <Image src={m.image} alt="Picture of the author" width={245} height={402}
                            />
                            <h1 className="ml-6 pb-5 px-4 text-center py-2 mt-4 bg-primary2 mx-4 rounded-3xl hover:cursor-pointer hover:bg-primary hover:text-blood">{m.title}</h1>
                        </div>
                    ))
                }
    </div>
    </div>
        </div>
    )
}

export default BlogArticleCard
