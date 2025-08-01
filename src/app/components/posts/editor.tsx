import {useEffect, useRef, useState} from 'react'
import { SimpleEditor, SimpleEditorRef } from '@/components/tiptap-templates/simple/simple-editor'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {validation} from "@/util/validation";
import {PostParam} from "@/util/interface"

export default function Editor() {
    const editorRef = useRef<SimpleEditorRef>(null)
    const titleRef = useRef<HTMLInputElement>(null);
    const [categories, setCategories] = useState<{ title: string, category: string }[]>([]);
    const [selectValue, setSelectValue] = useState<string>('');

    function handleSubmit() {
        if (!editorRef.current) return

        const content = editorRef.current.getHTML();

        const data: PostParam = {
            title: titleRef.current?.value ?? '',
            user: 'dongyuri',
            content: content,
            category: selectValue,
            create_time: ''
        }
        console.log('제목: ',titleRef.current?.value ?? '')
        console.log('에디터 내용:', content)
        console.log('카테고리 : ', selectValue)
        const { isValid, errors } = validation("post", data);

        if(isValid) {
            fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify(data)
            })
        }
        else {
            console.log("❌ 유효성 검사 실패:", errors);
            return;
        }
    }

    useEffect(() => {
        fetch('/api/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return <div className='flex flex-col gap-6'>
        <div className='grid grid-rows-2 items-center text-center gap-4'>
            <div className='flex'>
                <p className='input-label'>Title</p>
                <Input ref={titleRef}></Input>
            </div>
            <div className='flex'>
                <p className='input-label'>Category</p>
                <Select onValueChange={(value) => setSelectValue(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((item) => (
                            <SelectItem key={item.title} value={item.title}>
                                {item.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

        </div>
        <SimpleEditor ref={editorRef}/>
        <Button onClick={handleSubmit}>저장하기</Button>
    </div>
}