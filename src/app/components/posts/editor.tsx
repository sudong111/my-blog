import { useRef } from 'react'
import { SimpleEditor, SimpleEditorRef } from '@/components/tiptap-templates/simple/simple-editor'
import {Button} from "@/components/ui/button";

export default function Editor() {
    const editorRef = useRef<SimpleEditorRef>(null)

    const handleSubmit = () => {
        if (!editorRef.current) return
        const content = editorRef.current.getHTML()
        console.log('에디터 내용:', content)
    }

    return <>
        <SimpleEditor ref={editorRef}/>
        <Button onClick={handleSubmit}>저장하기</Button>
    </>
}