import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function menu() {
    return (
        <div className='side-menu'>menu
            <div>
                <Accordion type="multiple" >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>개념 정리</AccordionTrigger>
                        <AccordionContent>
                            Front-end
                        </AccordionContent>
                        <AccordionContent>
                            Back-end / Server
                        </AccordionContent>
                        <AccordionContent>
                            Framework
                        </AccordionContent>
                        <AccordionContent>
                            DBMS
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>프로젝트</AccordionTrigger>
                        <AccordionContent>
                            [팀플] 암환자 커뮤니티 i-am-ok
                        </AccordionContent>
                        <AccordionContent>
                            나만의 블로그 반응형으로 만들기!
                        </AccordionContent>
                        <AccordionContent>
                            Todo-List
                        </AccordionContent>
                        <AccordionContent>
                            MyCalendar
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}