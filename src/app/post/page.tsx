'use client'
import Editor from '@/app/components/posts/editor'

export default function Post() {
    return (
        <div className="mx-40 py-10">
            <h1 className="text-2xl font-bold mb-6">게시글 작성 페이지</h1>
            <Editor />
        </div>

    )
}