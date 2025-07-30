'use client'

import Img from "@/app/components/layouts/img";
import Create from "@/app/components/posts/create";

export default function Home() {
    return (
        <div className='grid grid-rows-[65rem_auto]'>
            <div>
                <Img />
                <Create/>
            </div>
            <div className='flex mx-10'>

            </div>
        </div>
    )
}