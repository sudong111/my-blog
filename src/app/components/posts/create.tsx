'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Create() {
    return (
        <Link href='/post'>
            <Button
                className='create-button'
            >
                게시글 작성
            </Button>
        </Link>
    )
}