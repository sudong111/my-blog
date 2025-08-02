'use client'

import Profile from "@/app/components/side/profile";
import Menu from "@/app/components/side/menu"
import {useEffect} from "react";

export function SideBar() {

    useEffect(() => {
        fetch('/api/init')
    }, [])

    return (
        <div className='div-container side'>
            <div className='side-bar'>
                <Profile />
                <Menu />
            </div>
        </div>

    )
}