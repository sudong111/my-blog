import { BsClipboardHeart, BsFillPersonFill } from "react-icons/bs";
import { Input } from "@/components/ui/input"
import ThemeToggle from "@/app/components/theme/theme-toggle";


export default function Header() {
    return (
        <header className='header'>
            <div className='div-container'>
                <button className='header-button'><BsClipboardHeart /></button>
                <div className='menu'>
                    <button className='header-button'>page</button>
                    <button className='header-button'>report</button>
                    <button className='header-button'>dashboard</button>
                </div>
                <div className='settings'>
                    <ThemeToggle/>
                    <button className='header-button'><BsFillPersonFill/></button>
                    <Input className='search' type="text" placeholder="Search.." />
                </div>
            </div>


        </header>
    );
}