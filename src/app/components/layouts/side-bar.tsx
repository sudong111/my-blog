import Profile from "@/app/components/side/profile";
import Menu from "@/app/components/side/menu"

export function SideBar() {
    return (
        <div className='div-container side'>
            <div className='side-bar'>
                <Profile />
                <Menu />
            </div>
        </div>

    )
}