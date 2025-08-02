import { BsClipboardHeart, BsFillPersonFill } from "react-icons/bs";
import { Input } from "@/components/ui/input"
import ThemeToggle from "@/app/components/theme/theme-toggle";
import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function Header() {
    return (
        <header className='header'>
            <div className='header-container'>
                <Link href='/'>
                    <Button variant='ghost' className='header-button'><BsClipboardHeart /></Button>
                </Link>
                <div className='menu'>
                    <Button variant='ghost' className='header-button'>page</Button>
                    <Button variant='ghost' className='header-button'>report</Button>
                    <Button variant='ghost' className='header-button'>dashboard</Button>
                </div>
                <div className='settings'>
                    <ThemeToggle/>
                    <Button variant='ghost' className='header-button'><BsFillPersonFill/></Button>
                    <Input className='search' type="text" placeholder="Search.." />
                </div>
            </div>


        </header>
    );
}