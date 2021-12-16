import React from 'react'
import Image from 'next/image'

function SingleArticle({single}) {
    console.log(single)
    return (
        <div className="bg-primary text-white">
            
            <div className="pt-10">
                <h1 className="text-center text-xl font-bold">{single.title}</h1>
                <div className="p-t-10 ml-36">
                <Image className="" src={single.image} alt="Picture of the author" width={802} height={372}
                 title='hello'   />
                </div>
            </div>

            <div className="max-w-3xl ml-2 lg:ml-40 pb-10">
                <p>{single.paragraph}</p>
            </div>

            <div className="max-w-3xl ml-2 lg:ml-40 pb-10">
                <p>{single.paragraph}</p>
            </div>

            <div className="max-w-3xl ml-2 lg:ml-40 pb-10">
                <p>{single.paragraph}</p>
            </div>

            <div className="max-w-3xl ml-2 lg:ml-40 pb-10">
                <p>{single.paragraph}</p>
            </div>
        </div>
    )
}

export default SingleArticle
