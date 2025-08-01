'use client'

import Img from "@/app/components/layouts/img";
import Create from "@/app/components/posts/create";
import PostCard from "@/app/components/posts/card";

export default function Home() {

    return (
        <div className='grid grid-rows-[65rem_auto]'>
            <div>
                <Img />
                <Create />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-10'>
                <PostCard/>
            </div>
        </div>
    )
}