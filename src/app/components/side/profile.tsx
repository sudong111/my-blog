import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function profile() {
    return (
        <div>
            <div className='profile'>
                <div className='profile-avatar'>
                    <Avatar className='w-40 h-40'>
                        <AvatarImage src="" />
                        <AvatarFallback>
                            <img src={'https://i.pinimg.com/736x/1f/96/71/1f96719d94013db918a66874fdfdda98.jpg'} />
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className='profile-text'>
                    <div>
                        <p className='name'>Dongyuri</p>
                    </div>
                    <div>
                        <p>동규리의 개발일지</p>
                    </div>
                </div>
            </div>
        </div>
    )
}